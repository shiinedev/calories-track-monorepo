import { asyncHandler } from "@/utils/async-handler.js";
import {
  saveFoodEntry,
  scanFood,
  analyzeImage,
  discardAnalyzedFood,
} from "../../controller/food.controller.js";
import { requireToken } from "../../middleware/auth.js";
import { upload } from "../../middleware/upload.js";
import { validateSchema } from "../../middleware/validate-schema.js";
import { saveFoodEntrySchema } from "../../schema/food.schema.js";
import { Router } from "express";

const foodRoutes = Router();

foodRoutes.post(
  "/scan",
  requireToken,
  upload.single("image"),
  asyncHandler(scanFood),
);
foodRoutes.post(
  "/analyze",
  requireToken,
  upload.single("image"),
  asyncHandler(analyzeImage),
);
foodRoutes.post(
  "/save",
  requireToken,
  validateSchema(saveFoodEntrySchema),
  saveFoodEntry,
);
foodRoutes.post("/discard", requireToken, asyncHandler(discardAnalyzedFood));

export default foodRoutes;
