// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'; // Tu archivo CSS
import App from './app.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));  // Crear el root
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
