import { useApiStore } from "@/stores/useApiStore";

export interface ICreateSubscriptionData {
  title: string;
  amount: number;
  start_at: string;
  url?: string;
  period: string;
  pan: number;
}

export const useCreateSub = async (data: ICreateSubscriptionData) => {
  return useApiStore()
    .post("api/v1/common/subscriptions", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
