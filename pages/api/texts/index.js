import path from "path";
import { promises as fs } from "fs";

const PATH = `data/texts/`;

export default async (req, res) => {
  if (req.method === "GET") {
    const source = await fs.readFile(path.resolve(PATH, "cookies.txt"));
    res.status(200).send(source);
  }
};
