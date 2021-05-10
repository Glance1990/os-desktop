// Core
import { put, call } from "redux-saga/effects";

// Instruments
import { infoActions } from "../../actions";

export function* loadSummaryData({ payload }) {
  const apiLink = "/api/texts/shortinfo";
  let status = null;

  try {
    const response = yield call(fetch, apiLink);
    status = response.status;

    const results = yield call([response, response.json]);
    console.log(results);

    yield put(infoActions.fillSummaryData(results));

    // if we have passed a flag false,
    // than it meeans it the first load an we dont
    // want to just open popup
    if (payload !== false) {
      yield put(infoActions.toggleInfoBox());
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Saga - loadSummaryData finished");
  }
}
