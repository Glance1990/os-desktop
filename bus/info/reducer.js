// Redux types
import { types } from "./types";
// redux
import { combineReducers } from "redux";

const infoTextState = [];

const infoTextReducer = (state = infoTextState, { type, payload }) => {
  switch (type) {
    case types.FILL_INFO_DATA:
      return [payload];

    default:
      return state;
  }
};

const openedArticlesState = [];

const openedArticleAnswers = (
  state = openedArticlesState,
  { type, payload }
) => {
  switch (type) {
    case types.OPEN_ARTICLE:
      return [...state, payload];
    case types.CLOSE_ARTICLE:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const infoSummaryState = [];

const summaryTextReducer = (state = infoTextState, { type, payload }) => {
  switch (type) {
    case types.FILL_SUMMARY_DATA:
      const { items } = payload;
      return [...items];
    default:
      return state;
  }
};

const infoBoxState = {
  boxOpen: false,
  customDataShow: false,
};

const stateOfInfoBoxReducer = (state = infoBoxState, { type }) => {
  switch (type) {
    case types.TOGGLE_INFO_BOX:
      return {
        ...state,
        boxOpen: !state.boxOpen,
      };
    case types.OPEN_INFO_BOX:
      return state.boxOpen
        ? state
        : {
            ...state,
            boxOpen: true,
          };
    case types.SHOW_CUSTOM_INFO_DATA:
      return { ...state, customDataShow: true };
    case types.CLOSE_CUSTOM_INFO_DATA:
      return { ...state, customDataShow: false };
    default:
      return state;
  }
};

export const infoReducer = combineReducers({
  infoTextReducer,
  openedArticleAnswers,
  summaryTextReducer,
  stateOfInfoBoxReducer,
});
