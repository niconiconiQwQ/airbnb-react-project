import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  height: 66px;
  padding: 20px 30px;
  border-radius: 30px;
  border: 1px solid #eee;
  background-color: #fff;
  .item {
    display: flex;
    align-items: center;
    .info{
      .title{
        color: #222;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .desc{
        color: #717171;
      }
    }
    .divider{
      margin-left: 200px;
      height: 160%;
      width: 2px;
      background-color: #eee;
    }
  }
`;