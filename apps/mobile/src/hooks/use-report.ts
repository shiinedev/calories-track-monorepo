import { reportService } from "@/services/report";
import { useQuery } from "@tanstack/react-query";

export const useDailyReport = (date: string) => {
  return useQuery({
    queryKey: ["dailyReport", date],
    queryFn: () => reportService.getDailyReport(date),
    staleTime: 3 * 60 * 1000, // 3 minutes
  });
};

export const useWeeklyReport = () => {
  return useQuery({
    queryKey: ["weeklyReport"],
    queryFn: () => reportService.getWeeklyReport,
    staleTime: 3 * 60 * 1000, // 5 minutes
  });
};

export const useMonthlyReport = (year: number, month: number) => {
  return useQuery({
    queryKey: ["monthlyReport", year, month],
    queryFn: () => reportService.getMonthlyReport(year, month),
    staleTime: 3 * 60 * 1000, // 5 minutes
  });
};
