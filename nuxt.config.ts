// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    app: {
        head: {
            title: 'Wuji Nuxt!',
        },
    },
    runtimeConfig: {
        public: {
            apiBase: '',
            storageNamespace: '',
        },
    },
    piniaPersistedstate: {
        storage: 'cookies',
    },
})
