// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
            meta: [
                {
                    name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1'
                }
            ],
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['nuxt-swiper'],
    runtimeConfig: {
        public: {
            appUrl: process.env.APP_URL,
            backendUrl: process.env.BACKEND_URL,
        }
    },

})
