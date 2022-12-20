import styled from "styled-components";
export const RoomWrapper = styled.li`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  .inner {
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 6px;
      overflow:hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .desc{
       margin: 10px 0 5px;
       font-size:12px;
       font-weight:700;
       color: #39576a;
    }
    .name{
      font-size: 16px;
      font-weight: 700;
      color: #484848;
      margin-bottom: 8px;
      :hover{
        cursor: pointer;
      }
    }
    .price{

    }
  }
`;