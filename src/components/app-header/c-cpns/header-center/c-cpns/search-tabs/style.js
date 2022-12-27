import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .text {
      font-size: 18px;
      padding: 6px 10px;
    }
    &.active {
      .bottom {
        width: 70%;
        height: 2px;
        background-color: #333;
      }
    }
  }
`;