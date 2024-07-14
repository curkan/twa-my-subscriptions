<script lang="ts" setup>
import {ExpandedViewport, useWebAppBackButton} from 'vue-tg';

const { showBackButton } = 	useWebAppBackButton();
const routeToCreate = () => {
    showBackButton()
    return navigateTo('/create')
}
</script>

<template>
    <ExpandedViewport :force="true" />
    <div class="subs__header">
        <h2>Мои подписки</h2>
        <div class="subs__header-create" @click="routeToCreate"></div>
    </div>

    <slot />
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/subs/subs';
</style>

