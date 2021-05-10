// Core
import { put, call } from "redux-saga/effects";

// Instruments
import { browserInfoActions } from "../../actions";

export function* loadTilesData({ urlHostLink }) {
  console.log("urlHostLinkurlHostLink", urlHostLink);
  const apiLink = urlHostLink
    ? `${urlHostLink}api/texts/tilesInfo`
    : "http://localhost:3000/api/texts/tilesInfo";

  let status = null;

  try {
    const response = yield call(fetch, apiLink);
    status = response.status;

    const results = yield call([response, response.json]);

    yield put(browserInfoActions.fillTilesData(results));
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Saga - loadTilesData finished");
  }
}
