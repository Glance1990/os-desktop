export const selectBrowserInfo = (state) => state.browserInfo;
export const selectTilesInfo = (state) => selectBrowserInfo(state).tilesInfo;
