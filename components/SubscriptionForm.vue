<script setup lang="ts">
import type {Subscription} from '~/composables/subscriptions/subscriptions.type';

const subscriptionData = defineModel<Subscription>('postData', {required: true})
const props = defineProps<{
  disabledButton: boolean,
}>()

</script>

<template>
<div class="subs__create-block dark:bg-slate-800 dark:text-white">
    <div class="subs__create-block__line">
        <label for="name">Название: </label>
        <input class="dark:bg-slate-800 dark:text-white" id="name" v-model="subscriptionData.title" placeholder="Название подписки" />
    </div>
    <div class="subs__create-block__line">
        <label for="amount">Цена: </label>
        <vue-number prefix="₽ " class="dark:bg-slate-800 dark:text-white" v-model="subscriptionData.amount" placeholder="0.00"></vue-number>
    </div>
    <div class="subs__create-block__line">
        <label for="amount">Дата начала: </label>
        <input class="dark:bg-slate-800 dark:text-white" type="date" v-model="subscriptionData.start_at">
    </div>
    <div class="subs__create-block__btn">
        <input
            class="disabled:bg-slate-500"
            type="submit"
            value="Добавить"
            :disabled="!subscriptionData.start_at.length || !subscriptionData.amount.length || !subscriptionData.title.length || disabledButton"
        >
    </div>
</div>
</template>

<style lang="scss">
@import '~/assets/sass/subs/create';
</style>


