<script setup lang="ts">
import Ads from "@/components/Ads.vue";
import ButtonsMenu from "@/components/ButtonsMenu.vue";
import Header from "@/components/Header.vue";
import Subscriptions from "@/components/Subscriptions.vue";
</script>

<template>
  <main>
    <Header />
    <ButtonsMenu />
    <Ads />
    <Subscriptions />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
