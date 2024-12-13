<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useThemeStore } from "./stores/themeStore";
</script>

<template>
  <van-config-provider :theme="useThemeStore().currentTheme" />
  <transition>
    <RouterView />
  </transition>
</template>

<style scoped></style>
