import { ref } from "vue";
import type { ISubscription } from "../types/subscription.type";
import { useApiStore } from "@/stores/useApiStore";

export const subscriptionData = ref<ISubscription>();

export const useGetSubData = async (subId: number) => {
  return useApiStore()
    .get("api/v1/common/subscriptions/" + subId)
    .then((response) => {
      subscriptionData.value = response.data;

      return subscriptionData.value;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
