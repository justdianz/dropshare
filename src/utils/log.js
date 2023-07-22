import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;
import process from "process";
import path from "path";
import { config } from "dotenv";

config();
const myFormat = printf(({ level, message, timestamp }) => {
  return `${level} ${message} ${timestamp}`;
});
const log = createLogger({
  level: process.env.ENV === "local" ? "debug" : "info",
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.File({ filename: path.resolve("storage/logs/app.log") }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production" || process.env.ENV === "local") {
  log.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
export default log;
