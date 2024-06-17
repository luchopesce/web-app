import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { apiServerInstance } from "../api/api";

export const verifyToken = async (token) => {
  // console.log(token);
  const response = await apiServerInstance.get("/auth/verify", {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  });
  // console.log(response.data);
  return response.data;
};

// Crear thunk asincrónico para verificar el token
export const verifyAsync = createAsyncThunk(
  "auth/verify",
  async (token, { rejectWithValue }) => {
    try {
      const response = await verifyToken(token);
      return response.data; // Devuelve solo los datos serializables
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Estado inicial del slice de autenticación
const initialState = {
  isAuthenticated: false,
  user: null,
  status: "idle",
  error: null,
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
      localStorage.removeItem("token"); // Remover el token del localStorage al hacer logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(verifyAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;

// Selectores para acceder al estado de autenticación desde Redux
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
