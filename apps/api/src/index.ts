import express, { type Express } from "express";
import pinoHttp from "pino-http";
import cors from "cors";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error.js";
import V1routes from "./routes/index.js";
import { logger } from "./utils/logger.js";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// loger
app.use(pinoHttp({ logger }));

app.get("/health", (req, res) => {
  req.log.info({
    route: "health",
    status: req.statusCode,
    service: "colorie-track-api",
  });

  res.json({
    ok: true,
    message: "Api is running!",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1", V1routes);

// not found

app.use(notFound);

// error handler

app.use(errorHandler);

export default app;
