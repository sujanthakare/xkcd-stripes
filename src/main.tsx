import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoutes } from './app-routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppThemeProvider } from '@/react-ui/theme';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const queryClient = new QueryClient();

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
