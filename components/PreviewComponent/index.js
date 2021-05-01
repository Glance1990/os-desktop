// Redux
import { useDispatch } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";
// Styling
import Styling from "./index.styles.js";

const PreviewComponent = ({ article, className }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(infoActions.loadArticleAsync(id));
  };

  return (
    <li
      className="Card"
      onClick={() => handleClick(article.id)}
      className={className}
    >
      <div>
        <h6>{article.name}</h6>
        <p>{article.preview}</p>
      </div>
    </li>
  );
};

export default Styling(PreviewComponent);
