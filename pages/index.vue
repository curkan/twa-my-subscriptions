<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
    <ClientOnly>
        <Subscriptions />
    </ClientOnly>
</template>

<style lang="scss">
@import '~/assets/sass/common/base/fonts';
@import '~/assets/sass/common/base/base';
@import '~/assets/sass/common/base/main';
</style>


