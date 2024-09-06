import { createGlobalStyle } from 'styled-components';
import { GlobalStyleProps } from './interface';

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, html, body {
   background-color: ${(props) => props.backgroundColor};
        height: 100vh;
        font-family: sans-serif;
        display:flex;
        flex-direction:column;
        gap:40px;
        
  }
`;
