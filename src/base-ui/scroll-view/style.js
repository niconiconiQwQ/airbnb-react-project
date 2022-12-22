import styled from "styled-components";
export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    display: flex;
    transition: transform 0.2s ease;
  }
  .control {
    position: absolute;
    top: 50%;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;
