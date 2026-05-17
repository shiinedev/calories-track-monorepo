import { AxiosError } from "axios";
import { api } from "./api";
import {
  IDailyReportStats,
  IMonthlyReportStats,
  IWeeklyReportStats,
  ReportResponse,
} from "@/types";

export const reportService = {
  getDailyReport: async (date: string) => {
    try {
      const { data } = await api.get<
        Promise<ReportResponse<IDailyReportStats>>
      >("/reports/daily", {
        params: { date },
      });
      return data;
    } catch (error) {
      console.error("error getting daily report", error);
      throw (
        (error as AxiosError<{ message: string }>).response?.data?.message ||
        "ERROR Getting Daily Report"
      );
    }
  },

  getWeeklyReport: async () => {
    try {
      const { data } =
        await api.get<ReportResponse<IWeeklyReportStats>>("/reports/weekly");
      return data;
    } catch (error) {
      console.error("error getting weekly report", error);
      throw (
        (error as AxiosError<{ message: string }>).response?.data?.message ||
        "ERROR Getting Weekly Report"
      );
    }
  },

  getMonthlyReport: async (year: number, month: number) => {
    try {
      const { data } = await api.get<ReportResponse<IMonthlyReportStats>>(
        "/reports/monthly",
        {
          params: { year, month },
        },
      );
      return data;
    } catch (error) {
      console.error("error getting monthly report", error);
      throw (
        (error as AxiosError<{ message: string }>).response?.data?.message ||
        "ERROR Getting Monthly Report"
      );
    }
  },
};
