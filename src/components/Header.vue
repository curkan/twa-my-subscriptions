<script setup lang="ts">
import type { ISubscription } from "@/composables/types/subscription.type";
import { useSubsStore } from "@/stores/useSubsStore";
import { computed, type PropType } from "vue";

const totalAmount = computed(() => {
  if (!useSubsStore().subscriptions) return 0;
  const total = useSubsStore().subscriptions.reduce(
    (acc, subscription) => acc + parseFloat(subscription.amount),
    0,
  );
  return total.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2,
  });
});
</script>

<template>
  <header class="header">
    <div class="line">Расход в месяц</div>
    <div class="amount">{{ totalAmount }}</div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/scss/header.scss";
</style>
