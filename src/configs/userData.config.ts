import { useWebApp } from "vue-tg";

const testUserDate = import.meta.env.VITE_AUTH_TEST_USER;

export const useUserData = () => {
  if (process.env.NODE_ENV === "development") {
    return testUserDate;
  } else {
    return useWebApp().initData;
  }
};
