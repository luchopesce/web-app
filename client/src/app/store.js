import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage
import rootReducer from "./rootReducer"; // Importa tu combinación de reducers aquí

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Incluye solo el slice de auth que deseas persistir
};

// Configura el reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuración del store
export const store = configureStore({
  reducer: persistedReducer,
});

// Crea el persistor
export const persistor = persistStore(store);
