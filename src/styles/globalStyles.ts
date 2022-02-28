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
    font-family: 'Special Elite', cursive;
    background-color: #263238;
    overflow: hidden;


    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    #root {
      height: 100vh;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`