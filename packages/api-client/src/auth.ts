import type {
  LoginSchema,
  RegisterSchema,
} from "@calorie-track/schemas/auth.schema";
import { api } from ".";
import type { UserWithToken } from "@calorie-track/types/user.types";

export const authApi = {
  async register({ username, password, email }: RegisterSchema) {
    return await api.post<UserWithToken>("/auth/register", {
      username,
      password,
      email,
    });
  },
  async login({ email, password }: LoginSchema) {
    return await api.post<UserWithToken>("/auth/login", {
      email,
      password,
    });
  },
  async getCurrentUser(token: string) {
    return await api.get<UserWithToken>("/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
