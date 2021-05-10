// Core
import { useDispatch } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";

// Styles
import Styling from "./index.styles.js";

const TileComponent = (props) => {
  const dispatch = useDispatch();
  const { customInfo, icon, iconPath, id, title } = props.info;

  const createMarkup = (text) => {
    return { __html: text };
  };

  const handleClick = () => {
    dispatch(infoActions.loadArticleAsync(id));
  };

  return (
    <Styling>
      <div className={props.className} onClick={() => handleClick(id)}>
        <div className="o-flexy__block">
          <h3>{title}</h3>
          <p>{customInfo}</p>
        </div>
        <div className="o-flexy__item">
          <div className="image" dangerouslySetInnerHTML={createMarkup(icon)} />
          <button>Info</button>
        </div>
      </div>
    </Styling>
  );
};

export default TileComponent;
