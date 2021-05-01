import styled from "styled-components";
import { media } from "../../styles/index";

const Styling = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.addresBarBackground};
  box-shadow: inset 1px 1px 0 0 ${(props) => props.theme.colors.boxShadow};
  position: relative;
  z-index: 150;
  cursor: not-allowed;
  transition: all 0.3s ease-in-out;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0.4em;
    border: 1px solid #142c69;
    z-index: 2;
    width: 30px;
    height: 30px;
    background: ${(props) => props.theme.colors.addresBarSquaresColor};
    border-color: ${(props) => props.theme.colors.addresBarSquaresBorderColor};
    box-shadow: ${(props) => props.theme.colors.addresBarSquaresBoxShadow};
  }
  &:before {
    left: 0.85em;
  }
  &:after {
    right: 0.85em;
  }
  .o-flexy {
    display: flex;
    justify-content: space-between;

    &__block {
      max-width: 100%;
      min-width: 0;
      flex-basis: auto;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        background: #142c69;
        box-shadow: 1px 1px 0 0 #fff;
        width: 100%;
        height: 1px;
        margin-bottom: 3px;
        display: block;
      }
    }

    &-item {
      .c-viewer__desc-text {
        color: ${(props) => props.theme.colors.addresBarColor};
        display: block;
        font-size: 0.9em;
        font-weight: 500;
        letter-spacing: 2px;
        overflow: hidden;
        padding: 1em;
        text-align: center;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export default Styling;
