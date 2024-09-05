import { createGlobalStyle } from 'styled-components';
import { DAY_COLOR, NIGHT_COLOR } from './common/constants';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
        background: linear-gradient(45deg, ${DAY_COLOR},${NIGHT_COLOR});
        height: 100vh;
        width: 100vw;
  }
`;
