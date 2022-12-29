import styled from "styled-components";

export const PicturesWrapper = styled.div`
position: relative;
  > .pictures {
    display: flex;
    height: 600px;
    /* background-color: #000; */
    &:hover{
      .cover{
        opacity: 1 !important;
        &:hover{
          opacity: 0 !important;
        }
      }
    }
    .left,
    .right {
      width: 50%;
      height: 100%;
      .item {
        /* maring padding 清零 有干扰 */
        margin: 0;
        padding: 0;
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          img{
            transform: scale(1.1);
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.2s ease;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        /* border-bottom: 1px solid #000; */
      }
    }
  }
  > .show-btn{
    position: absolute;
    z-index: 9;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
  }
`;