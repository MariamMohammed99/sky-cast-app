import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
        background: linear-gradient(to bottom, rgba(22, 103, 148, 1), rgba(91, 176, 224, 1));
        height: 100vh;
        width: 100vw;
  }
`;
