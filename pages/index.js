import * as R from "ramda";
import Head from "next/head";
// helpers
import { getUserInfo } from "../helpers/getUserInfo";
import { createUpdateObjInfo } from "../helpers/createUpdateObjInfo";

// React
import { useState, useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { initialDispatcher } from "../init/initialDispatcher";
import { initializeStore } from "../init/store";
// Selectors
import { selectInfoBoxState } from "../bus/info/selectors";
import { selectTilesInfo } from "../bus/browserInfo/selectors";
// Actions
import { browserInfoActions } from "../bus/browserInfo/actions";
import { infoActions } from "../bus/info/actions";
// Components
import Menu from "../components/Menu/index";
import Box from "../components/Box/index";
import Dashboard from "../components/Dashboard";
import InstantAnswersButton from "../components/InstantAnswersButton";
import AdressBar from "../components/AdressBar";

// Styles
import { ThemeProvider } from "styled-components";
import Styling from "../styles/homePageStyles.styles";
import { GlobalStyles } from "../styles/GlobalStyles";
import theme from "../theme/schema";

// other
import { disableSaga } from "../helpers/disableSaga";

//Modal.setAppElement("#__next");
// RND
import { Rnd } from "react-rnd";

export const getServerSideProps = async (ctx) => {
  const userInfo = await getUserInfo(ctx.req);

  const store = await initialDispatcher(ctx, initializeStore());
  await store.dispatch(browserInfoActions.fillTilesDataAsync());

  await disableSaga(store);

  const currentPageReduxState = {
    browserInfo: {
      tilesInfo: selectTilesInfo(store.getState()),
    },
  };

  //const initialReduxState = R.mergeDeepRight();
  console.log("currentPageReduxState", currentPageReduxState);
  return {
    props: { currentPageReduxState, userInfo },
  };
};

export default function Home(props) {
  const [value, setValue] = useState(false);
  const [themeName, setThemeName] = useState("default");

  const boxOpened = useSelector((state) => selectInfoBoxState(state));
  const dispatch = useDispatch();

  const changeTheme = () => {
    const themeNames = [
      "default",
      "alpineNight",
      "browso98",
      "crystalMaze",
      "sunsetShore",
    ];

    let randomThemeName = Math.floor(themeNames.length * Math.random());
    // add check so theme each time differes from previos one
    while (themeName == themeNames[randomThemeName]) {
      randomThemeName = Math.floor(themeNames.length * Math.random());
    }

    setThemeName(themeNames[randomThemeName]);
  };

  // fill summary data for questions from the server
  useEffect(() => {
    dispatch(
      browserInfoActions.fillTilesDataAsync()
      // browserInfoActions.fillTilesData(
      //   props.currentPageReduxState.browserInfo.tilesInfo
      // )
    );
  }, []);
  //fill initial data that we got from the server
  useEffect(() => {
    return dispatch(infoActions.loadSummaryInfoData(false));
  }, []);

  // Update custom data
  useEffect(() => {
    // Function that creates and object with all needed custom info
    const updateObj = createUpdateObjInfo(props.userInfo);
    // update redux state with custom info
    dispatch(browserInfoActions.updateActualData({ updateObj }));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme[themeName]}>
        <GlobalStyles />
        <Styling>
          <Menu changeTheme={changeTheme} />
          <main>
            <section>
              <div className="container">
                <AdressBar title={"About_Your_Computer"} />
                <Dashboard state={props.currentPageReduxState} />
              </div>
            </section>
          </main>
          {boxOpened ? <Box /> : null}
          <InstantAnswersButton />
        </Styling>
      </ThemeProvider>
    </>
  );
}
