import * as secureStore from "expo-secure-store";
import { AUTH_TOKEN_KEY } from "@/constants/config";

export const getAuthToken = async (): Promise<string | null> => {
  const token = await secureStore.getItemAsync(AUTH_TOKEN_KEY);
  return token;
};

export const saveAuthToken = async (token: string): Promise<void> => {
  await secureStore.setItemAsync(AUTH_TOKEN_KEY, token);
};

export const removeAuthToken = async (): Promise<void> => {
  await secureStore.deleteItemAsync(AUTH_TOKEN_KEY);
};
