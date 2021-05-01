import styled from "styled-components";

export default function Styling(element) {
  return styled(element)`
    .box {
      position: fixed;
      right: 10px;
      bottom: 80px;
      background: orange;
      max-width: 350px;
      height: 500px;
      max-height: 80%;
      padding: 20px 30px;
      border-radius: 10px;
      border: 2px solid rgb(235, 232, 54);
      overflow-y: scroll;
    }
    .article-active {
      overflow-y: hidden;
      .summarydata {
        max-height: 80%;
        overflow: hidden;
      }
    }

    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      padding: 30px 15px 20px;
      overflow: hidden scroll;
    }

    .summarydata {
      padding: 0;
      list-style-type: none;
      li {
        background: blanchedalmond;
        padding: 15px 10px;
        margin-bottom: 10px;
        transition: all 0.3s ease-in-out;
        border: 1px solid gold;
        &:hover {
          cursor: pointer;
          transform: scale(1.04);
        }
      }
    }
  `;
}
