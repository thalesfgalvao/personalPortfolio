import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100dvh;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto 1fr auto;
  `}
`;
