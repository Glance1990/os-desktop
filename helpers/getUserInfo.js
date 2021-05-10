import { isServer } from "./verifyServer";
const os = require("os");
const parser = require("ua-parser-js");
//const { width, height } = require("screenz");

export const getUserInfo = async (req) => {
  const verifyServer = isServer();
  if (!verifyServer) return;
  var ua = parser(req.headers["user-agent"]);

  const userInfo = {
    os: {
      type: ua.os.name,
      version: ua.os.version,
      arch: os.arch(),
    },
    // window: {
    //   width,
    //   height,
    // },
    browser: ua.browser,
  };

  return userInfo;
};
