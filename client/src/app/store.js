import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Configuramos el store de Redux utilizando configureStore de Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
});

export default store;
