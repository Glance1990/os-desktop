import styled from "styled-components";
import { media } from "../../styles/index";

const Styling = styled.div`
  .tiles {
    padding: 25px;
    ${media.md`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(5, 110px);
    grid-gap: 25px;    
    `}
    > div {
      margin: 15px 0;
      ${media.md`
        margin: 0;
        `}
      &:nth-child(1) {
        grid-column: 1/3;
        grid-row: 1/2;
      }
      &:nth-child(2) {
        grid-column: 3/4;
        grid-row: 1/3;
      }
      &:nth-child(3) {
        grid-column: 4/5;
        grid-row: 1/3;
      }
      &:nth-child(4) {
        grid-column: 1/2;
        grid-row: 2/4;
      }
      &:nth-child(5) {
        grid-column: 2/3;
        grid-row: 2/4;
      }
      &:nth-child(6) {
        grid-column: 3/5;
        grid-row: 3/4;
      }
      &:nth-child(n + 7) {
        grid-row: 4/6;
      }
    }
    > div {
      border: 1px solid black;
    }
  }
`;

export default Styling;
