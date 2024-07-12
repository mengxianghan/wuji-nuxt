// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  compatibilityDate: '2024-07-12',
})