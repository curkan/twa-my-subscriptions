import {useWebApp} from 'vue-tg'
import { Api } from '~/composables/api/api'

const { initData } = useWebApp()

export default defineNuxtRouteMiddleware(async () => {
    const $store = useNuxtApp()
    const initDataState = useState('initData')
    const runtimeConfig = useRuntimeConfig()
    runtimeConfig.public.backendUrl

    if (initDataState.value === undefined) {
        if (runtimeConfig.public.appEnv === 'local') {
            initDataState.value = runtimeConfig.public.testInitData
        } else {
            initDataState.value = initData
        }
    }

    if ($store.$userInfo === undefined) {
        const result = await Api.get(btoa(initDataState.value as string), '/common/me')

        if (result?.error.value) {
            return navigateTo('/unauthorized')
        } else {
            const resp = result.resp as Ref<ApiResponse<User>>
            $store.$userInfo = resp.value.data
            $store.$initData = initData
        }
    }
})

