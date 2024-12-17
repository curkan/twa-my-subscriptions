import { useApiStore } from "@/stores/useApiStore";

export interface IUpdateSubscriptionData {
  id: number;
  title: string;
  amount: number;
  start_at: string;
  url?: string;
  period: string;
  pan: number;
}

export const useUpdateSub = async (data: IUpdateSubscriptionData) => {
  return useApiStore()
    .put(`api/v1/common/subscriptions/${data.id}`, data)
    .then((response) => {
      if (response == false) {
        throw new Error("No response");
      }
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
