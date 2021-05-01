// Redux
import { useDispatch } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";
// Styling
import Styling from "./index.styles.js";

const FullAnswerComponent = ({ article, className }) => {
  const dispatch = useDispatch();

  const handleArticleClose = (id) => {
    dispatch(infoActions.closeArticle(id));
  };

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <article className={className}>
      <div>
        <span className="close" onClick={() => handleArticleClose(article.id)}>
          x
        </span>
        <div dangerouslySetInnerHTML={createMarkup(article.text)} />
      </div>
    </article>
  );
};

export default Styling(FullAnswerComponent);
