import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RequestsProvider } from './contexts/RequestsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RequestsProvider>
      <App />
    </RequestsProvider>
  </React.StrictMode>
);
