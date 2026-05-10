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

export interface ReponseBase {
  message: string;
}

export type RegisterInput = Pick<
  User,
  "email" | "username" | "dailyColorieTarget"
> & {
  password: string;
};
export type LoginInput = Pick<User, "email"> & { password: string };

export type UserWithToken = User & { token: string };

export type UpdateProfileInput = Partial<
  Pick<User, "username" | "onBoardingCompleted" | "dailyColorieTarget">
>;

export interface AuthResponse<T> extends ReponseBase {
  user: T;
}

export interface FoodResponse<T> extends ReponseBase {
  food: T;
}

export interface ReportResponse<T> extends ReponseBase {
  data: T;
}

export type Feature = {
  iconColor: "IconAmber" | "IconBlue" | "IconViolet";
  title: string;
  text: string;
};

export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

export interface IFoodResult extends Timestamp {
  userId: string;
  foodname: string;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  mealType: MealType;
  timestamp: Date;
  imageURl: string;
  storageKey: string;
}

export interface ScanFoodResult extends Omit<
  IFoodResult,
  "timestamp" | "userId"
> {
  imageBase64: string;
}
