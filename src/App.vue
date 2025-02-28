<script setup lang="ts">
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/themeStore";
import { onBeforeMount, onMounted } from "vue";
import { useAuth } from "./composables/auth/auth";

onBeforeMount(async () => {
  await useAuth();
});

onMounted(async () => {
  const style = getComputedStyle(document.body);
  const mainColor = style.getPropertyValue("--color-background-soft");

  window.Telegram.WebApp.setHeaderColor(mainColor);
  window.Telegram.WebApp.setBackgroundColor(mainColor);
  window.Telegram.WebApp.setBottomBarColor(mainColor);
  window.Telegram.WebApp.setBottomBarColor(mainColor);
  window.Telegram.WebApp.expand();

  if (window.Telegram.WebApp.isVersionAtLeast("8.0")) {
    // window.Telegram.WebApp.requestFullscreen()
  }
});
</script>

<template>
  <van-config-provider :theme="useThemeStore().currentTheme" />
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style scoped></style>
