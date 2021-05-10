import { useEffect } from "react";
// Redux stuff
import { useSelector, useDispatch } from "react-redux";
// Actions
import { browserInfoActions } from "../../bus/browserInfo/actions";
// Selectors
import { selectTilesInfo } from "../../bus/browserInfo/selectors";
// Components
import TileComponent from "../TileComponent/index";
// Styling
import Styling from "./index.styles.js";
import { withTheme } from "styled-components";

const Dashboard = ({ className }) => {
  const browserInfo = useSelector((state) => selectTilesInfo(state));

  const tileJSX = Object.entries(browserInfo).map((item, index) => {
    const info = item[1];
    let className;
    switch (index) {
      case 0:
        className = `col2 row1`;
        break;
      case 1:
        className = `col1 row2`;
        break;
      case 2:
        className = `col1 row2`;
        break;
      case 3:
        className = `col1 row2`;
        break;
      case 4:
        className = `col1 row2`;
        break;
      case 5:
        className = `col2 row1`;
        break;
      default:
        className = `col1 row2`;
        break;
    }
    return (
      <TileComponent
        className={className}
        info={info}
        key={`${info.id}${index}`}
      />
    );
  });

  return (
    <Styling>
      <div className="tiles">{tileJSX}</div>
    </Styling>
  );
};

export default withTheme(Dashboard);
