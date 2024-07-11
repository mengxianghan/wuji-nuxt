import storageConfig from '~/configs/storage'
import { useStorage } from '@vueuse/core'

export const useLocalStorage = (name: string, value: any) => {
    const { namespace } = storageConfig()
    name = namespace ? `${namespace}${name}` : name
    return useStorage(name, value, localStorage)
}

export const useSessionStorage = (name: string, value: any) => {
    const { namespace } = storageConfig()
    name = namespace ? `${namespace}${name}` : name
    return useStorage(name, value, sessionStorage)
}

export const useCookieStorage = (name: string, options: any) => {
    const { namespace } = storageConfig()
    name = namespace ? `${namespace}${name}` : name
    return useCookie(name, options)
}
