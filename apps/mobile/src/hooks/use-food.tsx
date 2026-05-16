import { foodService } from "@/services/food";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveFood = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: foodService.saveFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food"] });
      queryClient.invalidateQueries({ queryKey: ["daily-report"] });
      queryClient.invalidateQueries({ queryKey: ["weekly-report"] });
      queryClient.invalidateQueries({ queryKey: ["monthly-report"] });
    },
  });
};

export const useScanFood = () => {
  return useMutation({
    mutationFn: foodService.scanFood,
  });
};

export const useAnalyzeFood = () => {
  return useMutation({
    mutationFn: foodService.analyzeImage,
  });
};

export const useDiscardFood = () => {
  return useMutation({
    mutationFn: foodService.discardFood,
  });
};
