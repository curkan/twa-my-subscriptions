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
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(
      ([key, value]) => value !== undefined && value !== null && value !== "",
    ),
  );

  return useApiStore()
    .put(`api/v1/common/subscriptions/${data.id}`, filteredData)
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
