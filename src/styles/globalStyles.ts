import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
    background-color: #9e9e9e;


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