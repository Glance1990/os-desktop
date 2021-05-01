export const selectInfo = (state) => state.info;
export const selectInfoText = (state) => selectInfo(state).infoTextReducer;
export const selectInfoBoxState = (state) =>
  selectInfo(state).stateOfInfoBoxReducer;
export const selectSummaryData = (state) =>
  selectInfo(state).summaryTextReducer;
export const selectOpenedArticles = (state) =>
  selectInfo(state).openedArticleAnswers;
