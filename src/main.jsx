import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './styles/global';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
)
