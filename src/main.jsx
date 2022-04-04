
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'jotai'

import './index.css'

import App from './js/App'

const $container = document.getElementById('root');
const root = createRoot($container);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
