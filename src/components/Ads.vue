<script setup lang="ts">
import IconAds from "./icons/IconAds.vue";
</script>

<template>
  <a href="https://t.me/tsurkan_hut" class="ads">
    <div class="left">
      <div class="bold">Подпишитесь на канал разработчика</div>
      <div class="normal">Это стимулирует развитие продуктов</div>
    </div>
    <div class="right">
      <div class="img">
        <IconAds />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.ads {
  position: relative;
  color: var(--vt-c-text-dark-1);
  padding: 1em;
  border-radius: 5px;
  background: rgb(95, 167, 246);
  background: linear-gradient(
    90deg,
    rgba(95, 167, 246, 1) 0%,
    rgba(115, 182, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;

  .bold {
    font-weight: bold;
  }

  .right {
    position: absolute;
    right: 10px;
    top: 5px;
  }
}
</style>
