<script setup lang="ts">
import {useWebApp, useWebAppBackButton, useWebAppPopup} from 'vue-tg';

const { onBackButtonClicked } = useWebAppBackButton();
const { showAlert } = useWebAppPopup();
const { hideBackButton } = 	useWebAppBackButton();


onBackButtonClicked(() => {
    hideBackButton()
    return navigateTo('/')
});
</script>

<template>
    create
</template>

<style lang="scss">
</style>

