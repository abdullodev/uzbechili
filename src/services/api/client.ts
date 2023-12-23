import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// import host from "../../constants/environment";
import browserStorage from "../storage/browserStorage";

const token = browserStorage.get("token");

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

axios.interceptors.request.use(
  (config: any) => {
    const token = browserStorage.get("token");
    return {
      ...config,
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 31000,
      headers: {
        Authorization: `Bearer ${token}`,
        // test: host,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosInstance: AxiosInstance = axios.create(config);

export default axios;
