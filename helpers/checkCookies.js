import { isServer } from "./verifyServer";

export const checkCookies = () => {
  let cookieEnabled = navigator.cookieEnabled ? "Enabled" : "Dissabled";

  if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
    document.cookie = "testcookie";
    cookieEnabled =
      document.cookie.indexOf("testcookie") != -1 ? "Enabled" : "Dissabled";
  }
  return cookieEnabled;
};
