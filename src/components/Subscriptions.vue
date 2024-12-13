<script setup lang="ts">
import SubscriptionBlock from "./SubscriptionBlock.vue";
</script>

<template>
  <div class="subscriptions">
    <div v-for="i in 5">
      <SubscriptionBlock />
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscriptions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
