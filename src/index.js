import { config } from "dotenv";
import express from "express";
import process from "process";
import log from "./utils/log.js";
import helmet from "helmet";
import r from "./routes.js";
import { Liquid } from "liquidjs";
import path from "path";

const engine = new Liquid({
  cache: process.env.ENV === "production",
});

config();
const app = express();
app.engine("liquid", engine.express());
app.set("views", path.resolve("src/views"));
app.set("view engine", "liquid");
app.use(express.static(path.resolve("src/public")));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(r);

app.use((_, res) => {
  return res.status(404).send("404");
});
if (process.env.ENV == "production" || process.env.ENV == "local") {
  app.listen(process.env.LISTEN_PORT || 3000, () => {
    log.info(`App listen at port: ${process.env.LISTEN_PORT || 3000}`);
  });
}
