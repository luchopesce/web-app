import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiExternInstance } from "../api/api.js";

const initialState = {
  users: [],
  status: "idle", // Puede ser 'idle', 'loading', 'succeeded' o 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await apiExternInstance.get("/user");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState, // Estado inicial definido anteriormente
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.status = "succeeded";
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

// Selectores
export const selectAllUsers = (state) => state.users.users;
export const selectUsersStatus = (state) => state.users.status;
