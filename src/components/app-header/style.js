import styled from "styled-components";
export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
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
    background-color: #fff;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
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