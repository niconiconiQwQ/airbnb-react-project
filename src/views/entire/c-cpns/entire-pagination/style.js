import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-page {
      margin: 0 8px;
    }
    .MuiPaginationItem-icon{
      font-size: 24px;
    } .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
    }
    .desc {
      margin-top: 10px;
      color: #222;
    }
  }
`;