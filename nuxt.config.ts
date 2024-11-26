// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        pageTransition : { name : 'page', mode : 'in-out' },
        layoutTransition : { name : 'layout', mode : 'in-out' },
        head: {
            script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
            meta: [
                {
                    name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1'
                }
            ],
            bodyAttrs: {
                class: 'p-4',
            },
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['nuxt-swiper', '@nuxt/ui', '@nuxtjs/color-mode'],
    runtimeConfig: {
        public: {
            appUrl: process.env.APP_URL,
            backendUrl: process.env.BACKEND_URL,
            appEnv: process.env.APP_ENV,
            testInitData: process.env.AUTH_TEST_USER,
        }
    },
    experimental: {
       appManifest: false,
    },

})
