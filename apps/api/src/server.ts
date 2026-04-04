import app from "./index";
import { connectDB } from "@/config/db";
import { log } from "evlog";

export default async function startServer() {
  try {
    connectDB();
    app.listen(process.env.PORT || 9000, () => {
      log.info({
        message: "Server started",
        port: process.env.PORT || 9000,
      });
    });
  } catch (error) {
    log.error({
      message: "failed to connect database",
      couse: "database or port error",
    });

    throw error;
  }
}

startServer();
