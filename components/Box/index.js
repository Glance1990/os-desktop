import { useSelector, useDispatch } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";
// Selectors
import {
  selectInfoText,
  selectInfoBoxState,
  selectSummaryData,
  selectOpenedArticles,
} from "../../bus/info/selectors";
// Styling
import Styling from "./index.styles.js";
// Components
import PreviewComponent from "../PreviewComponent";
import FullAnswerComponent from "../FullAnswerComponent";

const Box = (props, state) => {
  const boxOpen = useSelector((state) => {
    const selectInfoBoxStateMap = selectInfoBoxState(state);
    return selectInfoBoxStateMap.boxOpen;
  });

  const showCertainArticle = useSelector((state) => {
    const selectInfoBoxStateMap = selectInfoBoxState(state);
    return selectInfoBoxStateMap.customDataShow;
  });

  const summaryData = useSelector((state) => selectSummaryData(state));
  console.log("state", state);

  const openedArticlesData = useSelector((state) => {
    return selectOpenedArticles(state);
  });

  console.log("openedArticlesData", openedArticlesData.size);

  const handleArticleClose = () => {
    dispatch(infoActions.closeCustomInfoData());
  };

  const summaryJSX = summaryData.map((item) => {
    const articleData = item.suggestion;
    return <PreviewComponent article={articleData} key={articleData.id} />;
  });

  const openedArticleAnswersJSX = openedArticlesData.map((item, index) => {
    return <FullAnswerComponent article={item} key={index} />;
  });

  return boxOpen ? (
    <div className={props.className}>
      <div
        className={`box ${openedArticlesData.size ? "article-active" : null}`}
      >
        <h3>Instant Answers</h3>
        <ul className="summarydata">{summaryJSX}</ul>
        {openedArticleAnswersJSX}
        {showCertainArticle ? (
          <article className="article">
            <span onClick={handleArticleClose}>x</span>
          </article>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default Styling(Box);
