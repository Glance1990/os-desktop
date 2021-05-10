import { isServer } from "./verifyServer";

export const checkFlash = () => {
  let flashEnabled = "Disabled";
  try {
    let fo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    if (fo) hasFlash = true;
  } catch (e) {
    if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined)
      flashEnabled = "Enabled";
  }
  return flashEnabled;
};
