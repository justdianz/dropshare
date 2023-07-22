import { Router } from "express";
import { index as indexHome } from "./controllers/homeController.js";
import { index as indexFile, store } from "./controllers/fileController.js";
import uploader from "./middlewares/multer.js";

const r = Router();
r.route("/").get(indexHome);
r.route("/files").get(indexFile).post(uploader.single("file"), store);
export default r;
