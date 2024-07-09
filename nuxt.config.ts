// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@ant-design-vue/nuxt',
    ],
    app: {
        head: {
            title: 'Wuji Nuxt!',
        },
    },
    runtimeConfig: {
        public: {
            apiBase: '',
            storageNamespace: 'wuji_nuxt_',
        },
    },
    piniaPersistedstate: {
        storage: 'cookies',
    },
    antd: {
        extractStyle: true,
    },
})
