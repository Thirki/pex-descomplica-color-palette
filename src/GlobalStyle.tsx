import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ffffff;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  body {
    background-color: #0A0F15;
  }
`;
