import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media ${theme.breakpoints.mobile} {
      display: flex;
      flex-direction: row;
      grid-column: 2;
      grid-row: 1;
      justify-content: space-around;
    }
    @media ${theme.breakpoints.tablet} {
      display: flex;
      flex-direction: row;
      grid-column: 2;
      grid-row: 1;
      justify-content: space-around;
    }
  `}
`;
