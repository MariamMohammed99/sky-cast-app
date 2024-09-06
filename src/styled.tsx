import { createGlobalStyle } from 'styled-components';
import { BG_DAY_COLOR } from './common/constants';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, html, body {
        background-color: ${BG_DAY_COLOR};
        height: 100vh;
        width: 100vw;
        font-family: sans-serif;
        display:flex;
        flex-direction:column;
  }

  
`;
