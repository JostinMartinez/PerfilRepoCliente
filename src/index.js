import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

// Obtén el contenedor raíz del DOM
const container = document.getElementById('root');

// Crea la raíz con createRoot
const root = ReactDOM.createRoot(container);

// Renderiza la aplicación dentro de la raíz
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);