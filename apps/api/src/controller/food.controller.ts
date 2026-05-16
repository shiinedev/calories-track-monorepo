import { logger } from "../utils/logger.js";
import { foodService } from "../services/food.service.js";
import type { Request, Response } from "express";

export const scanFood = async (req: Request, res: Response) => {
  const file = req.file;

  console.log("file in scan ", file);

  if (!file) {
    return res
      .status(400)
      .json({ error: "No file uploaded, please provide an image" });
  }

  req.log.info({ message: `user: ${req.user!}` });

  if (!req.user) {
    req.log.error({ error: "Unauthorized" });
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.scanFood(file.buffer, userId, "base64");

  return res.status(200).json({
    message: "Food scanned successfully",
    food: result,
  });
};

export const analyzeImage = async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    req.log.error({ error: "No file uploaded, please provide an image" });
    return res
      .status(400)
      .json({ error: "No file uploaded, please provide an image" });
  }

  logger.info({ message: `user: ${req.user!}` });

  if (!req.user) {
    req.log.error({ error: "Unauthorized" });
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.scanFood(file.buffer, userId, "model");

  return res.status(200).json({
    message: "Food scanned successfully",
    food: result,
  });
};

export const saveFoodEntry = async (req: Request, res: Response) => {
  if (!req.user) {
    req.log.error({ error: "Unauthorized" });
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();

  const result = await foodService.saveFoodEntry(req.body, userId);

  return res.status(200).json({
    message: "Food entry saved successfully",
    food: result,
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

export const getFoodEntries = async (req: Request, res: Response) => {
  if (!req.user) {
    logger.error({ error: "Unauthorized" });
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user._id.toString();
  const date = req.query.date ? new Date(req.query.date as string) : new Date();

  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(startDate);
  endDate.setHours(23, 59, 59, 999);

  logger.info({
    message: `Fetching food entries for date from controller`,
    date: date.toISOString(),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    userId,
  });

  const entries = await foodService.getFoodEntries(startDate, endDate, userId);

  return res.status(200).json({
    message: "Food entries retrieved successfully",
    entries,
  });
};
