// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { loadArticleData, loadSummaryData } from "./workers/index";

function* watchLoadInfoData() {
  yield takeEvery(types.LOAD_ARTICLE_DATA_ASYNC, loadArticleData);
}

function* watchLoadSummaryData() {
  yield takeEvery(types.LOAD_SUMMARY_DATA_ASYNC, loadSummaryData);
}

export function* watchInfo() {
  yield all([call(watchLoadInfoData), call(watchLoadSummaryData)]);
}
