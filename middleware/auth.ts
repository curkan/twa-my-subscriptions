import {useWebApp} from 'vue-tg'
import { Api } from '~/composables/api/api'

// const { initData } = useWebApp()
const initData = 'query_id=AAGm2W4aAAAAAKbZbhrTs0i-&user=%7B%22id%22%3A443472294%2C%22first_name%22%3A%22N.%22%2C%22last_name%22%3A%22C%22%2C%22username%22%3A%22curkan_n%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721150387&hash=f09ca0b18a52599877e5175ad5b708211b071f2565eb013cb8d42f127397723d'

export default defineNuxtRouteMiddleware(async () => {
    const $store = useNuxtApp()
    const initDataState = useState('initData')
    if (initDataState.value === undefined) {
      initDataState.value = initData
    }

    if ($store.$userInfo === undefined) {
        const result = await Api.get(btoa(initData), '/common/me')

        if (result.resp?.value) {
            const resp = result.resp as Ref<ApiResponse<User>>
            $store.$userInfo = resp.value.data
            $store.$initData = initData
        }
    }
})

