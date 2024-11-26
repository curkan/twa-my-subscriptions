<script setup lang="ts">
import {useWebAppBackButton} from 'vue-tg';
import SubscriptionForm from '~/components/SubscriptionForm.vue';
import {Api} from '~/composables/api/api';
import type {Subscription} from '~/composables/subscriptions/subscriptions.type';


const { onBackButtonClicked } = useWebAppBackButton();
const { hideBackButton } = 	useWebAppBackButton();


const initData = useState('initData')

interface IFormData {
  title: string
  url: string
  amount: Number|null
  start_at: Date
}

const formData = ref<IFormData>({
    title: '',
    url: '',
    amount: null,
    start_at: new Date(),
})

let disabledButton = false

setPageLayout('default')
definePageMeta({
  middleware: 'auth'
})

onBackButtonClicked(() => {
    hideBackButton()
    return navigateTo('/')
});

const formSubmit = async (): Promise<void | undefined> => {
    disabledButton = true
    const result = await Api.post(formData.value, '/common/subscriptions', btoa(initData.value as string))

    if (result?.error.value?.statusCode != undefined) {
        throw new Error(result?.error.value.message)
    } else if (result?.resp) {
        const response = result.resp.value as ApiResponse<Subscription>
        disabledButton = false
        navigateTo('/')
    }
}
</script>

<template>
    <div class="subs__header">
        <UButton
            color="gray"
            variant="ghost"
            @click="useRouter().go(-1)"
            icon="i-heroicons-chevron-left-20-solid"
        ></UButton>
        <h2>Создание подписки</h2>
    </div>
    <div class="subs__create">
        <form id="create-form" @submit.prevent="formSubmit()">
            <SubscriptionForm v-model:post-data="formData" :disabled-button="disabledButton"/>
        </form>
    </div>
</template>

<style lang="scss">
@import '~/assets/sass/subs/create';
</style>

