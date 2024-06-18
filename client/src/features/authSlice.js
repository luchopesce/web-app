import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// Estado inicial del slice de autenticación
const initialState = {
  isAuthenticated: false,
  user: null,
  userData: null, //ya lo trae desde antes es para probar una peticion a una ruta nada mas
  token: localStorage.getItem("token") || null, // Obtener el token del localStorage al inicio
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const token = action.payload;
      const decodedToken = jwtDecode(token);
      state.isAuthenticated = true;
      state.user = decodedToken;
      state.token = token;
      localStorage.setItem("token", token); // Guardar el token en localStorage
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.userData = null;
      localStorage.removeItem("token"); // Remover el token del localStorage al hacer logout
    },
    setUserData(state, action) {
      console.log(action.payload)
      state.userData = action.payload;
    },
  },
});

export const { login, logout, setUserData, clearUserData } = authSlice.actions;

// Selectores para acceder al estado de autenticación desde Redux
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectUserData = (state) => state.auth.userData;

export default authSlice.reducer;
