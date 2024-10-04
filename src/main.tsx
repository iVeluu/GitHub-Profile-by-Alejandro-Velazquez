import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importa React Query
import App from './App.tsx';
import './index.css';

// Crea una instancia de QueryClient
const queryClient = new QueryClient();

// Envolver la app con QueryClientProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
