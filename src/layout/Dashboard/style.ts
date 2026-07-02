import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  ${({ theme }) => css`
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${theme.colors.bodyContainer};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `}
`;
