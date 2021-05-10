import { checkCookies } from "./checkCookies";
import { checkFlash } from "./checkFlash";
import { checkColorDepth } from "./checkColorDepth";
import { checkPixelRatio } from "./checkPixelRatio";
import { checkAdblocker } from "./checkAdblocker";

export const createUpdateObjInfo = (userInfo) => {
  const cookiesEnabled = checkCookies();
  const flashEnabled = checkFlash();
  const colorDepth = checkColorDepth();
  const pixelRatio = checkPixelRatio();
  const addBlocker = checkAdblocker();
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches
    ? "Prefers reduced motion"
    : "No preference";
  console.log("userInfouserInfo", userInfo);
  const os = `${userInfo.os.type} ${userInfo.os.version} ${userInfo.os.arch}`;
  const webBrowser = `${userInfo.browser.name} ${userInfo.browser.version}`;
  const resolution = `${window.innerWidth} x ${window.innerHeight}`;

  const customInfoObj = {
    os: {
      customInfo: os,
    },
    webBrowser: {
      customInfo: webBrowser,
    },
    resolution: {
      customInfo: resolution,
    },
    cookies: {
      customInfo: cookiesEnabled,
    },
    javascript: {
      customInfo: "Enabled",
    },
    colorDepth: {
      customInfo: colorDepth,
    },
    flash: {
      customInfo: flashEnabled,
    },
    adBlocker: {
      customInfo: addBlocker,
    },
    motion: {
      customInfo: mediaQuery,
    },
    screenDpi: {
      customInfo: pixelRatio,
    },
  };
  return customInfoObj;
};
