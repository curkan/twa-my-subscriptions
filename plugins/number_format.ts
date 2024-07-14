import VueNumber from '@coders-tm/vue-number-format'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNumber, { precision: 4, prefix: '$ ' })
})


