// Styling
import Styling from "./index.styles.js";
import { withTheme } from "styled-components";
import styled from "styled-components";

const AdressBar = ({ title }) => {
  return (
    <Styling>
      <div className="o-flexy o-flexy--middle">
        <div className="o-flexy__block">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="o-flexy-item">
          <span className="c-viewer__desc-text">{title}</span>
        </div>
        <div className="o-flexy__block">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Styling>
  );
};

export default withTheme(AdressBar);
