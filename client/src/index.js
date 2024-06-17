import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store"; // Ajusta la ruta según la ubicación real de tu archivo store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter >
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
