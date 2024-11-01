import React from 'react';
import ReactDOM from 'react-dom/client'; // Esta es la importación correcta de ReactDOM
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
