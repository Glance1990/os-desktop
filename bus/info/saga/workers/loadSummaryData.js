// Core
import { put, call } from "redux-saga/effects";

// Instruments
import { infoActions } from "../../actions";

export function* loadSummaryData() {
  const apiLink = "/api/texts/shortinfo";
  let status = null;

  console.log("here we are");

  try {
    const response = yield call(fetch, apiLink);
    status = response.status;

    const results = yield call([response, response.json]);
    console.log(results);

    yield put(infoActions.fillSummaryData(results));

    yield put(infoActions.toggleInfoBox());
  } catch (error) {
    console.log(error);
  } finally {
    console.log("yee");
  }
}
