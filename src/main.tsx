import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/react-query';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';
import ThemeProvider from '@context/ThemeProvider';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <ThemeProvider >
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
