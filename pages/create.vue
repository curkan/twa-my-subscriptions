<script setup lang="ts">
import {useWebAppBackButton} from 'vue-tg';
import {Api} from '~/composables/api/api';
import type {Subscription} from '~/composables/subscriptions/subscriptions.type';


const { onBackButtonClicked } = useWebAppBackButton();
const { hideBackButton } = 	useWebAppBackButton();


const initData = useState('initData')

interface IFormData {
  title: string
  url: string
  amount: Number|null
  start_at: string
}

const formData = ref<IFormData>({
    title: '',
    url: '',
    amount: null,
    start_at: '',
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
        <h2>Создание подписки</h2>
    </div>
    <div class="subs__create">

        <form id="create-form" @submit.prevent="formSubmit()">
            <div class="subs__create-block">
                <div class="subs__create-block__line">
                    <label for="name">Название: </label>
                    <input id="name" v-model="formData.title" placeholder="Название подписки" />
                </div>
                <div class="subs__create-block__line">
                    <label for="amount">Цена: </label>
                    <vue-number prefix="₽ " v-model="formData.amount" placeholder="0.00"></vue-number>
                </div>
                <div class="subs__create-block__line">
                    <label for="amount">Дата начала: </label>
                    <input type="date" v-model="formData.start_at">
                </div>
                <div class="subs__create-block__btn">
                    <input
                        type="submit"
                        value="Добавить"
                        :disabled="!formData.start_at.length || !formData.amount.length || !formData.title.length || disabledButton"
                    >
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
@import '~/assets/sass/subs/create';
</style>

