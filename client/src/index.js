import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <BrowserRouter>
  <Provider store={store}>
  <Suspense>
    <App />
    </Suspense>
  </Provider>,
  </BrowserRouter>
</HelmetProvider>

);
