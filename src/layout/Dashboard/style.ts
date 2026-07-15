import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    grid-column: 1/2;
    grid-row: 1/4;
    display: grid;
    grid-template-rows: 20% 70% 10%;
    background-color: ${theme.colors.bodyContainer};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 2rem;
    z-index: 9999;
    @media ${theme.breakpoints.mobile} {
      grid-column: 1/4;
      grid-row: 1/2;
      max-width: 100%;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      grid-template-rows: 100%;
    }
    @media ${theme.breakpoints.tablet} {
      grid-column: 1/4;
      grid-row: 1/2;
      max-width: 100%;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      grid-template-rows: 100%;
    }
    @media ${theme.breakpoints.desktop} {
      grid-column: 1/2;
      grid-row: 1/4;
      display: grid;
      grid-template-rows: 20% 70% 10%;
    }
  `}
`;
