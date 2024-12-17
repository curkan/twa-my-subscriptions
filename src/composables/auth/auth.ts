import { useApiStore } from "@/stores/useApiStore";
import type { IUser } from "../types/user.type";
import { useUserStore } from "@/stores/useUserStore";

export const useAuth = async () => {
  if (useUserStore().authUser === undefined) {
    return useApiStore()
      .get("api/v1/common/me")
      .then((response) => {
        return (useUserStore().authUser = response.data as IUser);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    return useUserStore().authUser;
  }
};
