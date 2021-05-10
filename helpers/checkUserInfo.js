import { isServer } from "./verifyServer";
import nookies from "nookies";
import setCookies from "./setCookies";
const fs = require("fs").promises;

export const checkUserInfo = async (ctx) => {
  const verifyServer = isServer();
  if (!verifyServer) return;

  let userVisitCounts, userId;
  const cookies = nookies.get(ctx);

  try {
    const source = await fs.readFile("data/users.json", "utf-8");
    const data = source ? JSON.parse(source) : [];
    const index = cookies["user"]
      ? data.findIndex((user) => user.userId == cookies["user"])
      : -1;
    if (index > -1) {
      data[index].visitCounts++;
      userVisitCounts = data[index].visitCounts;
      userId = data[index].userId;
    } else {
      userId = Date.now();
      data.push({ userId: Date.now(), visitCounts: 1 });
      setCookies(ctx, userId);
      userVisitCounts = 1;
    }
    await fs.writeFile("data/users.json", JSON.stringify(data, null, 4));
  } catch (error) {
    console.error(error.message);
  }

  return { userVisitCounts, userId };
};
