import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .i-list {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;