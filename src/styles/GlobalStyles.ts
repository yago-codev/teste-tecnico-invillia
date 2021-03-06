import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
