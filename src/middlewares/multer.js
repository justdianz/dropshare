import multer from "multer";
import path from "path";

const uploader = multer({
  dest: path.resolve("storage/tmp"),
});

export default uploader;
