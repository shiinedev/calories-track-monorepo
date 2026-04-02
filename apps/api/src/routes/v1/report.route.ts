import { Router } from "express";
import { requireToken } from "@/middleware/auth.js";
import {
  getDailyReport,
  getMonthlyReport,
  getWeeklyReport,
} from "@/controller/report.controller.js";

export const reportRoutes = Router();

reportRoutes.get("/daily", requireToken, getDailyReport);
reportRoutes.get("/weekly", requireToken, getWeeklyReport);
reportRoutes.get("/monthly", requireToken, getMonthlyReport);

export default reportRoutes;
