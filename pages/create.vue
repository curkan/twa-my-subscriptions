<script setup lang="ts">
import {useWebApp, useWebAppBackButton, useWebAppPopup} from 'vue-tg';

const { onBackButtonClicked } = useWebAppBackButton();
const { showAlert } = useWebAppPopup();
const { hideBackButton } = 	useWebAppBackButton();
setPageLayout('default')


onBackButtonClicked(() => {
    hideBackButton()
    return navigateTo('/')
});
</script>

<template>
    <div class="subs__create">
        <div class="subs__create-block">
            <div class="subs__create-block__line">
                <label for="name">Название: </label>
                <input id="name" placeholder="Название подписки" />
            </div>
            <div class="subs__create-block__line">
                <label for="url">URL: </label>
                <input id="url" placeholder="https://goga.zone" />
            </div>
            <div class="subs__create-block__line">
                <label for="amount">Цена: </label>
                <vue-number prefix="₽ " placeholder="0.00"></vue-number>
            </div>
            <div class="subs__create-block__line">
                <label for="amount">Дата начала: </label>
                <input type="date">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '~/assets/sass/subs/create';
</style>

