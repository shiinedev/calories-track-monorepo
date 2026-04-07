export interface Timestamp {
  createdAt: string;
  updatedAt: string;
}

export interface User extends Timestamp {
  id: string;
  username: string;
  email: string;
  dailyColorieTarget: number;
  onBoardingCompleted: boolean;
}

export type UserWithToken = User & { token: string };

export type UpdateProfileInput = Partial<
  Pick<User, "username" | "onBoardingCompleted" | "dailyColorieTarget">
>;
