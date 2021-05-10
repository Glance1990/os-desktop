import { types } from "./types";

export const browserInfoActions = {
  fillTilesData: (data) => {
    return {
      type: types.FILL_TILES_DATA,
      payload: data,
    };
  },
  updateActualData: (updateData) => {
    return {
      type: types.UPDATE_ACTUAL_DATA,
      payload: updateData,
    };
  },
  // Async
  fillTilesDataAsync: (urlHostLink) => {
    return {
      type: types.FILL_INITIAL_DATA_ASYNC,
      payload: urlHostLink,
    };
  },
  updateActualDataAsync: (link) => {
    return {
      type: types.UPDATE_ACTUAL_DATA_ASYNC,
      payload: link,
    };
  },
};
