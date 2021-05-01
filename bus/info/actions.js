import { types } from "./types";

export const infoActions = {
  fillSummaryData: (data) => {
    return {
      type: types.FILL_SUMMARY_DATA,
      payload: data,
    };
  },
  fillData: (data) => {
    return {
      type: types.FILL_INFO_DATA,
      payload: data,
    };
  },
  openArticle: (data) => {
    return {
      type: types.OPEN_ARTICLE,
      payload: data,
    };
  },
  closeArticle: (data) => {
    return {
      type: types.CLOSE_ARTICLE,
      payload: data,
    };
  },
  toggleInfoBox: () => {
    return {
      type: types.TOGGLE_INFO_BOX,
    };
  },
  openInfoBox: () => {
    return {
      type: types.OPEN_INFO_BOX,
    };
  },
  showCustomInfoData: () => {
    return {
      type: types.SHOW_CUSTOM_INFO_DATA,
    };
  },
  closeCustomInfoData: () => {
    return {
      type: types.CLOSE_CUSTOM_INFO_DATA,
    };
  },
  // Async
  loadCustomInfoData: (link) => {
    return {
      type: types.LOAD_CUSTOM_DATA_ASYNC,
      payload: link,
    };
  },
  loadArticleAsync: (link) => {
    return {
      type: types.LOAD_ARTICLE_DATA_ASYNC,
      payload: link,
    };
  },
  loadSummaryInfoData: () => {
    return {
      type: types.LOAD_SUMMARY_DATA_ASYNC,
    };
  },
};
