import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row: 1/2;
    grid-column: 2/3;
    background-color: ${theme.colors.bodyContainer};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    z-index: 9998;
    padding: 2rem;
    @media ${theme.breakpoints.mobile} {
      display: none;
      visibility: hidden;
    }
    @media ${theme.breakpoints.tablet} {
      display: none;
      visibility: hidden;
    }
  `}
`;

export const HeaderTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.sizes.large};
  `}
`;
