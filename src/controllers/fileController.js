import fs from "fs";
import path from "path";

async function index(req, res) {
  return res.send("ok");
}

async function store(req, res) {
  const { originalname, mimetype, path, size } = req.file;
  const { name, delete_at } = req.body;

  return res.send("ok");
}

async function destroy(req, res) {}

export { index, store, destroy };
