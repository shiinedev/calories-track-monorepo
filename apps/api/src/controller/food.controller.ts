import { logger } from "../utils/logger.js";
import { foodService } from "../services/food.service.js";
import type { Request, Response } from "express";

export const scanFood = async (req: Request, res: Response) => {
  const { file } = req.body;

  if (!file) {
    return res
      .status(400)
      .json({ error: "No file uploaded, please provide an image" });
  }

  req.log.info({ message: `user: ${req.user!}` });

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
    req.log.error({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.scanFood(file.buffer, userId, "base64");

  return res.status(200).json({
    message: "Food scanned successfully",
    result,
  });
};

export const analyzeImage = async (req: Request, res: Response) => {
  const { file } = req.body;

  if (!file) {
    return res
      .status(400)
      .json({ error: "No file uploaded, please provide an image" });
  }

  logger.info({ message: `user: ${req.user!}` });

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.scanFood(file.buffer, userId, "base64");

  return res.status(200).json({
    message: "Food scanned successfully",
    result,
  });
};

export const saveFoodEntry = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.saveFoodEntry(req.body, userId);

  return res.status(200).json({
    message: "Food entry saved successfully",
    result,
  });
};

export const discardAnalyzedFood = async (req: Request, res: Response) => {
  if (!req.user) {
    logger.error({ error: "Unauthorized" });
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { storageKey } = req.body;

  if (!storageKey) {
    logger.error({ error: "Storage key is required" });
    return res.status(400).json({ error: "Storage key is required" });
  }

  await foodService.discardAnalyzedFood(storageKey);

  return res.status(200).json({
    message: "Analyzed food discarded successfully",
  });
};
