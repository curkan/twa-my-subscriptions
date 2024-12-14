import { defineStore } from "pinia";
import { useHttpStore } from "./useHttpStore";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const useApiStore = defineStore("useApiStore", () => {
  const { http } = useHttpStore();

  async function get(
    url: string,
    config = {},
  ): Promise<AxiosResponse | void | any> {
    return http
      .get(url, config)
      .then((response) => {
        return response?.data;
      })
      .catch((error: AxiosError) => {
        return false;
      })
      .finally(() => {});
  }

  async function post(
    url: string,
    data = {},
    config = {},
  ): Promise<AxiosResponse | void | any> {
    return http
      .post(url, data, config)
      .then((response) => {
        return response?.data;
      })
      .catch((error: AxiosError) => {
        return false;
      })
      .finally(() => {});
  }

  async function postForm(
    url: string,
    data: FormData,
    config = {},
    snackBarText = "",
  ): Promise<AxiosResponse | void | any> {
    return http
      .postForm(url, data, config)
      .then((response) => {
        if (snackBarText) {
        }

        return response?.data;
      })
      .catch((error: AxiosError) => {
        return error;
      })
      .finally(() => {});
  }

  async function put(
    url: string,
    data = {},
    config = {},
    snackBarText = "",
  ): Promise<AxiosResponse | void | any> {
    return http
      .put(url, data, config)
      .then((response) => {
        if (snackBarText) {
        }

        return response?.data;
      })
      .catch((error: AxiosError) => {
        return false;
      })
      .finally(() => {});
  }

  async function del(
    url: string,
    config = {},
  ): Promise<AxiosResponse | void | any> {
    return http
      .delete(url, config)
      .then((response) => {
        return response?.data;
      })
      .catch((error: AxiosError) => {
        return false;
      })
      .finally(() => {});
  }

  return { get, post, put, postForm, del };
});
