<script setup lang="ts">
import { useGetSubsData } from "@/composables/main/useGetSubsData";
import SubscriptionBlock from "./SubscriptionBlock.vue";
import type { ISubscription } from "@/composables/types/subscription.type";
import { ref } from "vue";
const subscriptionsLoaded = ref(false);
const subscriptions = ref<ISubscription[]>();
useGetSubsData().then((response) => {
  subscriptions.value = response;
  subscriptionsLoaded.value = true;
});

const deleteSubscriptionEmit = (subscriptionId: number) => {
  subscriptions.value = subscriptions.value.filter(
    (item: ISubscription) => item.id !== subscriptionId,
  );
};
</script>

<template>
  <div class="subscriptions">
    <TransitionGroup v-if="subscriptionsLoaded != true">
      <div v-for="item in 5" :key="item">
        <van-skeleton title-width="100%" style="width: 100%" title />
      </div>
    </TransitionGroup>
    <TransitionGroup v-else>
      <div v-for="subscription in subscriptions" :key="subscription.id">
        <SubscriptionBlock
          :subscription="subscription"
          @delete-subscription="deleteSubscriptionEmit"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.subscriptions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.van-skeleton {
  padding: 0;
  border-radius: 10px;
}
</style>
