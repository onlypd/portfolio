import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ThemeProvider wraps the entire app to provide dark/light mode */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);