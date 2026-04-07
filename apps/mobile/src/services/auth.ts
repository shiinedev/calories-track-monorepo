import { api } from "./api";
import type {
  UserWithToken,
  LoginInput,
  RegisterInput,
  User,
  UpdateProfileInput,
} from "@/types";
import { removeAuthToken } from "@/utils/storage";

export const authApi = {
  async register(input: RegisterInput) {
    try {
      return await api.post<UserWithToken>("/auth/register", input);
    } catch (error) {
      console.error("error register;", error);
      throw error;
    }
  },
  async login(input: LoginInput) {
    try {
      return await api.post<UserWithToken>("/auth/login", input);
    } catch (error) {
      console.error("error login;", error);
      throw error;
    }
  },
  async getCurrentUser() {
    try {
      return await api.get<UserWithToken>("/auth/user");
    } catch (error) {
      console.error("error getCurrentUser;", error);
      throw error;
    }
  },

  async updateProfile(input: UpdateProfileInput) {
    try {
      return await api.put<User>("/auth/user", input);
    } catch (error) {
      console.error("error updateProfile;", error);
      throw error;
    }
  },
  async logout() {
    try {
      return await removeAuthToken();
    } catch (error) {
      console.error("error logout;", error);
      throw error;
    }
  },
};
