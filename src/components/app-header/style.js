import styled from "styled-components";
export const HeaderWrapper = styled.div`
  z-index: 99;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .content {
    position: relative;
    z-index: 100;
    transition: all 0.25s ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  /* 下面的半灰色覆盖层 */
  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const SearchAreaWrapper = styled.div`
  transition: height 0.2s ease;
  height:${props=>props.isSearch?'100px':'0'}
`