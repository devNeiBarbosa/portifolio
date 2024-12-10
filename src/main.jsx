import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import GlobalStyle from './styles/GlobalStyles.js';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
);
