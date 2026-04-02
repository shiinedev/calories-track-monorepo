import { Router } from "express";
import userRouter from "./v1/user.routes.js";
import foodRoutes from "./v1/food.routes.js";
import reportRoutes from "./v1/report.route.js";

const V1routes = Router();

V1routes.use("/auth", userRouter);
V1routes.use("/food", foodRoutes);
V1routes.use("/reports", reportRoutes);

export default V1routes;
