import styled from "styled-components";
import { media } from "../styles/index";

const Styling = styled.div`
  .container {
    background: ${(props) => props.theme.colors.containerWindowColor};
    border: 1px solid #142c69;
    box-shadow: 8px 8px 0 0 rgb(0 0 0 / 20%);
    margin: 20px auto 40px;
    max-width: 90%;
    ${media.md`
      width: 1280px;
    `}
  }
`;

export default Styling;
