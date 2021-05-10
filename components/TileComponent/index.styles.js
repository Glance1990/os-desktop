import styled from "styled-components";
import { media } from "../../styles/index";

const Styling = styled.div`
  box-shadow: 4px 4px 0 0 #fff3dd;
  > div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-color: #142c69;
    background: #fff;
    height: 100%;
    .o-flexy__item {
      position: relative;
      width: 150px;
      height: 100px;
      .image,
      button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .image {
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out 0.1s;
      }
      button {
        background-color: #fff3dd;
        border: 1px solid #142c69;
        color: #142c69;
        padding: 10px 20px;
        opacity: 0;
        transition: opacity 0.3s ease-in 0.3s;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &:hover {
      cursor: pointer;
      .o-flexy__item {
        .image {
          transform: translate(-60%, -50%);
          opacity: 0;
        }
        button {
          opacity: 1;
        }
      }
    }
  }
  > .col2 {
    ${media.md`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20px;
    `}
  }
  h3 {
    color: #142c69;
  }
`;

export default Styling;
