import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional: You can use this file for basic global styling.
import './i18n/i18n'; // Import the i18n configuration.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
