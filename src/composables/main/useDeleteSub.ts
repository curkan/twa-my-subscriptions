import { useApiStore } from "@/stores/useApiStore";

export const useDeleteSub = async (subscriptionId: number) => {
  return useApiStore()
    .del(`api/v1/common/subscriptions/${subscriptionId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
