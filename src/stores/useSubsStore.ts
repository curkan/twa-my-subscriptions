import { ref } from "vue";
import { defineStore } from "pinia";
import type { ISubscription } from "@/composables/types/subscription.type";

export const useSubsStore = defineStore("useSubsStore", () => {
  const subscriptions = ref<ISubscription[]>();

  return { subscriptions };
});
