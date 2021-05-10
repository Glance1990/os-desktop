// Core
import { combineReducers } from "redux";

// Reducers
import { infoReducer as info } from "../bus/info/reducer";
import { browserInfoReducer as browserInfo } from "../bus/browserInfo/reducer";

export const rootReducer = combineReducers({
  info,
  browserInfo,
});
