import type { DirectiveBinding } from 'vue'

interface CustomElement extends HTMLElement {
    [key: string | symbol]: any
}

const KEY = Symbol('bubble')

function onClick(el: CustomElement, binding: DirectiveBinding) {
    const {
        style = '',
        text = '+1',
        offset = 24,
        duration = '1s',
    } = binding.value
    const disabled =
        typeof binding.value?.disabled === 'undefined'
            ? false
            : binding.value?.disabled

    if (disabled) return

    const { width, x, y } = el.getBoundingClientRect()
    const span: CustomElement = document.createElement('span')

    span.addEventListener('transitionend', () => {
        span.remove()
    })

    span.innerHTML = text
    span.setAttribute(
        'style',
        `position: absolute; top: ${y}px; transition: all ${duration}; pointer-events: none; ${style}`
    )
    el.insertAdjacentElement('afterend', span)
    span.style.left = `${x + width / 2 - span.clientWidth / 2}px`
    span.style.transform = `translateY(-${span.clientHeight + offset}px)`
    span.style.opacity = '0'
    span.style.visibility = 'hidden'
}

function addClickListener(el: CustomElement, binding: DirectiveBinding): void {
    el[KEY] = () => onClick(el, binding)
    el.addEventListener('click', el[KEY])
}

function removeClickListener(el: CustomElement): void {
    el.removeEventListener('click', el[KEY])
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('bubble', {
        mounted(el, binding) {
            addClickListener(el, binding)
        },
        updated(el, binding) {
            setTimeout(() => {
                removeClickListener(el)
                addClickListener(el, binding)
            }, 100)
        },
        beforeUnmount(el) {
            removeClickListener(el)
        },
    })
})
