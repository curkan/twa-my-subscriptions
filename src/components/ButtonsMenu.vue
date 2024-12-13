<script setup lang="ts">
import IconPlus from "./icons/IconPlus.vue";
import IconSetting from "./icons/IconSetting.vue";
</script>

<template>
  <nav>
    <RouterLink to="/create" class="button">
      <div class="icon">
        <IconPlus />
      </div>
      <span>Добавить</span>
    </RouterLink>
    <RouterLink to="/settings" class="button">
      <div class="icon">
        <IconSetting />
      </div>
      <span>Настроить</span>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/scss/buttons.scss";
nav {
  justify-content: center;
  display: flex;
  gap: 10px;
}
</style>
