import app from "./index.js";
import { connectDB } from "@/config/db.js";
import { log } from "evlog";

export default async function startServer() {
  connectDB();
  app.listen(process.env.PORT || 9000, () => {
    log.info({
      message: "Server started",
      port: process.env.PORT || 9000,
    });
  });
}

startServer();
