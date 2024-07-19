<script lang="ts" setup>
import {ExpandedViewport, useWebAppBackButton} from 'vue-tg';

</script>

<template>
    <ExpandedViewport :force="true" />

    <slot />
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
@import '~/assets/sass/subs/subs';
</style>

