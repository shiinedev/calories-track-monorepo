import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { getAuthToken } from "@/utils/storage";
import { API_URL } from "@/constants/config";

export class APiError extends Error {
  constructor(
    message: string,
    public status: number,
    public error: any,
  ) {
    super(message);
    this.name = "APiError";
  }
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAuthToken()}`,
  },
});

export const api = {
  get: <T = unknown>(endPoint: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(endPoint, config).then((res) => res.data as T),
  post: <T = unknown>(
    endPoint: string,
    body?: any,
    config?: AxiosRequestConfig,
  ) =>
    axiosInstance.post<T>(endPoint, body, config).then((res) => res.data as T),
  put: <T = unknown>(
    endPoint: string,
    body?: any,
    config?: AxiosRequestConfig,
  ) =>
    axiosInstance.put<T>(endPoint, body, config).then((res) => res.data as T),
  delete: <T = unknown>(endPoint: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(endPoint, config).then((res) => res.data as T),
};
