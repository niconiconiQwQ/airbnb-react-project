import styled from "styled-components";

export const BrowserWrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #333;
  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      /* 动画样式 */
      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
      }
    }
  }
  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    .info {
      position: absolute;
      bottom: 10px;
      width: 100%;
      max-width: 105vh;
      color: #fff;
    }
    .desc {
      display: flex;
      justify-content: space-between;
    }
    .list {
      overflow:hidden;
      margin-top: 3px;
      transition: height 0.3s ease;
      .item {
        margin-right: 15px;
        cursor: pointer;
        opacity: 0.5;
        img {
          height: 100%;
        }
        &.active {
          opacity: 1;
        }
      }
    }
    .toggle {
      cursor: pointer;
    }
  }
`;
