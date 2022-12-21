import styled from "styled-components";
export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};
  font-size: 14px;
  font-weight: 600;
  .btns {
    display: flex;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      box-sizing: content-box;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: #999;
    ${(props) => props.theme.mixin.boxShadow}
    .panel{
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      color: #666;
      box-shadow: 0 0 2px 2px rgba(0,0,0,.18);
      border-radius: 10px;
      .top,.bottom{
        padding: 10px 0;
        .item{
          height: 40px;
          line-height: 40px;
          padding: 0 14px;
          &:hover{
            background-color: #f5f5f5;
          }
        }
      }
      .top{
        border-bottom: 2px solid #eee;
      }
    }
  }
`;
