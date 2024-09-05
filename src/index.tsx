import { createRoot } from 'react-dom/client';
import App from './app';
import { GlobalStyle } from './styled';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
