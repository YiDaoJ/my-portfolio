import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
  }

  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.font};
    overflow: hidden;


    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent!important;
    }

    #root {
      height: 100vh;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`;
