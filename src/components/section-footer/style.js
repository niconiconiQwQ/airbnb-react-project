import styled from "styled-components";
export const FooterWrapper = styled.div`
display: flex;
margin-top: 10px;
.info{
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 17px;
  color: ${props => props.color};
  font-weight: 600;
  &:hover{
    text-decoration: underline;
  }
  .text{
    margin-right: 4px;
  }
}
`