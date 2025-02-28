import { useApiStore } from "@/stores/useApiStore";

export interface IUpdateUserData {
  settings: {
    notify_to_bot?: boolean;
  };
}

export const useUpdateUser = async (data: IUpdateUserData) => {
  return useApiStore()
    .put(`api/v1/common/me`, data)
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
