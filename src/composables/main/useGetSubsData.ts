import { ref } from "vue";
import type { ISubscription } from "../types/subscription.type";
import { useApiStore } from "@/stores/useApiStore";

export const subsctionsData = ref<ISubscription[]>();

export const useGetSubsData = async () => {
  let query = "";

  return useApiStore()
    .get("api/v1/common/subscriptions" + query)
    .then((response) => {
      subsctionsData.value = response.data;

      return subsctionsData.value;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
