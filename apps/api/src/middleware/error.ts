import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";
import type { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  logger.error({
    message: "Unhandled error",
    error: err,
    method: req.method,
    path: req.path,
  });

  res.status(500).json({
    message: err.message,
    stack: env.NODE_ENV === "production" ? undefined : err.stack,
    method: req.method,
    path: req.path,
    name: err.name,
  });
};
