<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/themeStore.ts";
import { watch } from "vue";

const themeStore = useThemeStore();
const { currentMode, currentTheme } = storeToRefs(themeStore);

const updateTheme = (mode: string) => {
  themeStore.setThemeMode(mode);
};

watch(currentMode, (newMode) => {
  if (newMode == "system") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      currentTheme.value = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      currentTheme.value = "light";
      document.documentElement.setAttribute("data-theme", "light");
    }
  } else {
    currentTheme.value = newMode;
    document.documentElement.setAttribute("data-theme", newMode);
  }

  const style = getComputedStyle(document.body);
  const mainColor = style.getPropertyValue("--color-background-soft");

  window.Telegram.WebApp.setHeaderColor(mainColor);
  window.Telegram.WebApp.setBackgroundColor(mainColor);
  window.Telegram.WebApp.setBottomBarColor(mainColor);
  window.Telegram.WebApp.setBottomBarColor(mainColor);

  localStorage.setItem("theme", currentTheme.value);
  localStorage.setItem("theme-mode", newMode);
});
</script>
<template>
  <div class="theme-switcher">
    <van-cell-group title="Оформление" :border="false" inset>
      <van-cell title="Светлая" clickable @click="updateTheme('light')">
        <template #right-icon>
          <van-radio name="light" :checked="currentMode === 'light'" />
        </template>
      </van-cell>
      <van-cell title="Темная" clickable @click="updateTheme('dark')">
        <template #right-icon>
          <van-radio name="dark" :checked="currentMode === 'dark'" />
        </template>
      </van-cell>
      <van-cell title="Системная" clickable @click="updateTheme('system')">
        <template #right-icon>
          <van-radio name="system" :checked="currentMode === 'system'" />
        </template>
      </van-cell>
    </van-cell-group>
    <!-- <label> -->
    <!--   <input type="radio" name="theme" value="light" @change="updateTheme('light')" :checked="currentMode === 'light'" /> -->
    <!--   Light -->
    <!-- </label> -->
    <!-- <label> -->
    <!--   <input type="radio" name="theme" value="dark" @change="updateTheme('dark')" :checked="currentMode === 'dark'" /> -->
    <!--   Dark -->
    <!-- </label> -->
    <!-- <label> -->
    <!--   <input type="radio" name="theme" value="system" @change="updateTheme('system')" :checked="currentMode === 'system'" /> -->
    <!--   System -->
    <!-- </label> -->
  </div>
</template>
<style></style>
