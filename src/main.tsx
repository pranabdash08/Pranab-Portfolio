import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.css'

console.log('main.tsx is executing');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Root element not found!</div>';
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <HelmetProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
              },
            }}
          />
        </HelmetProvider>
      </React.StrictMode>,
    )
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    rootElement.innerHTML = `<div style="color: red; padding: 20px;">Error: ${error}</div>`;
  }
} 