// Core
import { all } from "redux-saga/effects";

// Workers
import { watchInfo } from "../bus/info/saga/watchers";
import { watchBrowserInfo } from "../bus/browserInfo/saga/watchers";

export function* rootSaga() {
  yield all([watchInfo(), watchBrowserInfo()]);
}
