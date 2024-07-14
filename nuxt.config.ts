// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        // layoutTransition: { name: 'layout', mode: 'out-in' },
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
})
