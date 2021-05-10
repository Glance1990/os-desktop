// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { loadTilesData } from "./workers/index";

function* watchLoadTilesData() {
  yield takeEvery(types.FILL_INITIAL_DATA_ASYNC, loadTilesData);
}

export function* watchBrowserInfo() {
  yield all([call(watchLoadTilesData)]);
}
