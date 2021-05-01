// Redux types
import { types } from "./types";
// redux
import { combineReducers } from "redux";
// helpers
import { deepClone } from "../../helpers/deepClone";

const tilesTextState = {};

const tilesInfo = (state = tilesTextState, { type, payload }) => {
  switch (type) {
    case types.FILL_TILES_DATA:
      return payload;
    case types.UPDATE_ACTUAL_DATA:
      const clonedStateObj = deepClone(state);
      const { updateObj } = payload;
      Object.keys(updateObj).forEach((key) => {
        clonedStateObj.hasOwnProperty(key)
          ? (clonedStateObj[key]["customInfo"] = updateObj[key]["customInfo"])
          : null;
      });
      return clonedStateObj;
    default:
      return state;
  }
};

export const browserInfoReducer = combineReducers({
  tilesInfo,
});
