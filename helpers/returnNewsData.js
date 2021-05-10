import { isServer } from "./verifyServer";
const fs = require("fs").promises;

export const returnNewsData = async () => {
  const verifyServer = isServer();
  if (!verifyServer) return;

  let newsData, discountsData, carsData;

  try {
    const sourceNews = await fs.readFile("data/news.json", "utf-8");
    newsData = sourceNews ? JSON.parse(sourceNews) : [];
    const sourceDiscounts = await fs.readFile("data/discounts.json", "utf-8");
    discountsData = sourceDiscounts ? JSON.parse(sourceDiscounts) : [];
    const sourceCars = await fs.readFile("data/cars.json", "utf-8");
    carsData = sourceCars ? JSON.parse(sourceCars) : [];
  } catch (error) {
    console.error(error.message);
  }

  return { newsData, discountsData, carsData };
};
