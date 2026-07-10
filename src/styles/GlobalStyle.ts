import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      height: 100%;
    }
    body {
      font-family: "Inter", sans-serif;
      font-size: ${theme.sizes.medium};
      background-color: ${theme.colors.background};
      width: 100%;
      min-height: 100dvh;
    }
    ol,
    li {
      list-style: none;
    }
    button {
      mouse: pointer;
    }
  `}
`;
