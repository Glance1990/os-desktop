import path from "path";
import { promises as fs } from "fs";

const PATH = `data/texts/`;

const pathToFiles = {
  "5d1b758604286305cb88136a": "cookies.json",
  "5d1e4b6a04286369ad8d4e9f": "adBlocker.json",
  "5d1b79b82c7d3a6ebd22f13e": "flash.json",
  "5d1e344e04286369ad8d4d28": "javascript.json",
  "5d1e31e104286369ad8d4d1f": "operatingSystem.json",
  "5d1e857604286369ad8d4fc7": "reducedMotion.json",
  "5d1e46be04286369ad8d4e79": "screenSettings.json",
  "5d1e495c04286369ad8d4e93": "webBrowser.json",
};

export default async (req, res) => {
  if (req.method === "GET") {
    const { name } = req.query;
    const pathToFile = path.resolve(PATH, pathToFiles[name]);
    const source = await fs.readFile(pathToFile);
    res.status(200).send(source);
  }
};
