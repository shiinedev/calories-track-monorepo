import { Types } from "mongoose";
import {
  IBaseStats,
  IDailyReportStats,
  IMonthlyReportStats,
  IWeeklyReportStats,
  MacrosStats,
  MicrostatsKeys,
} from "@calorie-track/types/report.types.ts";

export type CalculateMacrosInput = Record<MicrostatsKeys, number>;

export type CalculateMacrosResult = {
  caloriesFromFat: number;
  caloriesFromCarbs: number;
  caloriesFromProtein: number;
  totalMacrosCalories: number;
};

export type PrepareMacrosInput = CalculateMacrosResult &
  Omit<IBaseStats, "totalCalories">;

export interface IReport {
  // 1. getDialyReport - returns a daily report of the user's activity
  getDialyReport(
    userId: Types.ObjectId | string,
    date: Date | string,
  ): Promise<IDailyReportStats>;

  // 2. getWeaklyReport - returns a weekly report of the user's activity
  getWeaklyReport(
    userId: Types.ObjectId | string,
    startDate: Date,
    endDate: Date,
  ): Promise<IWeeklyReportStats>;

  // 3. getMonthlyReport - returns a monthly report of the user's activity
  getMonthlyReport(
    userId: Types.ObjectId | string,
    startDate: Date,
    endDate: Date,
  ): Promise<IMonthlyReportStats>;

  // helper functions
  // 1. calculateMacros - calculates the calories from protein, carbs, and fat
  calculateMacros({
    protein,
    carbs,
    fat,
  }: CalculateMacrosInput): CalculateMacrosResult;
  // 2. calculatePercentage - calculates the percentage of a value out of a total
  calculatePercentage(value: number, total: number): number;
  // 3 prepareMacros data
  prepareMacros(input: PrepareMacrosInput): MacrosStats;
}
