import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "modern-normalize";

import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </HelmetProvider>
  </React.StrictMode>,
)
