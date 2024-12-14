<script setup lang="ts">
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/themeStore";
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
