import styled from "styled-components";
export const RoomWrapper = styled.li`
  width: ${(props) => props.itemWidth};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  .inner {
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 6px;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper {
      position: relative;
      cursor: pointer;
      &:hover {
        .controls {
          display: flex;
        }
      }
      .controls {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;
        color: #fff;
        .btn {
          width: 83px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: #39576a;
    }
    .name {
      font-size: 16px;
      font-weight: 700;
      color: #484848;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      cursor: pointer;
    }
    .price {
      margin: 8px 0;
    }
    .button {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      .count {
        margin: 0 2px 0 4px;
      }
      .MuiRating-icon {
        margin-right: -1px;
      }
    }
  }
`;
