// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        pageTransition: { name: 'page', mode: 'in-out' },
        // layoutTransition: { name: 'slide-in', mode: 'out-in' },
        head: {
          script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['nuxt-swiper'],
})
