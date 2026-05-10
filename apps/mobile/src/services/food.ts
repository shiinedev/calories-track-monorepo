import { AxiosError } from "axios";
import { api } from "./api";
import { IFoodResult, ScanFoodResult } from "@/types";

export const foodService = {
  scanFood: async (formData: FormData): Promise<ScanFoodResult> => {
    try {
      const data = await api.post<ScanFoodResult>("/food/scan", formData);
      return data;
    } catch (error) {
      console.error("Error scanning food", error);
      throw (
        (error as AxiosError<{ message: string }>)?.response?.data?.message ??
        "Error scanning food"
      );
    }
  },
  analyzeImage: async (formData: FormData): Promise<IFoodResult> => {
    try {
      const data = await api.post<IFoodResult>("/food/analyze", formData);
      return data;
    } catch (error) {
      console.error("Error analyzing image", error);
      throw (
        (error as AxiosError<{ message: string }>)?.response?.data?.message ??
        "Error analyzing image"
      );
    }
  },
  saveFood: async (formData: FormData): Promise<IFoodResult> => {
    try {
      const data = await api.post<IFoodResult>("/food/save", formData);
      return data;
    } catch (error) {
      console.error("Error saving food", error);
      throw (
        (error as AxiosError<{ message: string }>)?.response?.data?.message ??
        "Error saving food"
      );
    }
  },

  discardFood: async (formData: FormData): Promise<IFoodResult> => {
    try {
      const data = await api.post<IFoodResult>("/food/discard", formData);
      return data;
    } catch (error) {
      console.error("Error discarding food", error);
      throw (
        (error as AxiosError<{ message: string }>)?.response?.data?.message ??
        "Error discarding food"
      );
    }
  },
};
