import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.logged = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
