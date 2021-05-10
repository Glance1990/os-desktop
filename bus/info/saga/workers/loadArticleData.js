// Core
import { put, call } from "redux-saga/effects";

// Instruments
import { infoActions } from "../../actions";

export function* loadArticleData({ payload }) {
  const apiLink = `/api/texts?name=${payload}`;
  let status = null;

  try {
    const response = yield call(fetch, apiLink);
    status = response.status;

    const results = yield call([response, response.json]);
    console.log(results);

    yield put(infoActions.openArticle(results));

    yield put(infoActions.openInfoBox());
    //yield put(infoActions.showCustomInfoData());
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Saga - loadArticleData finished");
  }
}
