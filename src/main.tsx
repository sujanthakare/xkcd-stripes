import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoutes } from './app-routes';
import { GlobalStyles } from './global-styles';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>,
);
