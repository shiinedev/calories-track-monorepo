import pino from "pino";

export const logger = pino({
  level:
    process.env.LOG_LEVEL ||
    (process.env.NODE_ENV === "production" ? "info" : "debug"),
  transport:
    process.env.NODE_ENV !== "production"
      ? { target: "pino-pretty" } // human-readable in dev
      : undefined, // raw JSON in prod (Railway reads this)
});
