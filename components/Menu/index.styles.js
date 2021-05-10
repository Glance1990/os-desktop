import styled from "styled-components";
import { media } from "../../styles/index";

const Styling = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.menuBackgroundColor};
  border: 1px solid ${(props) => props.theme.colors.menuBorderColor};
  box-shadow: ${(props) => props.theme.colors.menuBoxShadow};
  max-width: 90%;
  margin: 15px auto 30px;
  svg {
    path {
      fill: ${(props) => props.theme.colors.svgIconColor};
    }
  }
  .logo {
    border-right: 1px solid ${(props) => props.theme.colors.menuBorderColor};
    cursor: pointer;
    position: relative;
    height: 50px;
    width: 50px;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .menu {
    list-style-type: none;
    display: flex;
    margin: 0;
    li {
      padding: 10px 10px;
      border-right: 1px solid ${(props) => props.theme.colors.menuBorderColor};
      &:first-child {
        border-left: 1px solid ${(props) => props.theme.colors.menuBorderColor};
      }
      &:last-child {
        border-right: none;
      }
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Styling;
