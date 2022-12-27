import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  .i-list {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;