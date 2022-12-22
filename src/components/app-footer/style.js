import styled from "styled-components";
export const FooterWrapper = styled.div`
  border-top: 1px solid #eee;
  padding-top: 48px;
  margin-top: 20px;
  > .footer {
    width: 1032px;
    display: flex;
    margin: 0 auto;
    > div {
      width: 25%;
      .title {
        color: #484848;
        margin-bottom: 10px;
      }
      .links {
        .item {
          height: 22px;
          line-height: 22px;
          font-weight: 600;
          a {
            color: #767676;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;