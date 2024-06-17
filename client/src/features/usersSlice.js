import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosOriginalInstance } from "../api/axiosInstance.js";
import socket from "../api/socket.js";

const initialState = {
  users: [],
  status: "idle", // Puede ser 'idle', 'loading', 'succeeded' o 'failed'
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axiosOriginalInstance.get("/user");
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const subscribeToUsers = () => (dispatch) => {
  socket.on("users", (data) => {
    dispatch(updateUsers(data));
  });

  socket.on("connect", () => {
    dispatch(setStatus("connected"));
  });

  socket.on("disconnect", () => {
    dispatch(setStatus("disconnected"));
  });
};

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
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Manejo de acciones asíncronas con createAsyncThunk
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

export const { setStatus, setUsers, updateUsers } = usersSlice.actions;

export default usersSlice.reducer;

// Selectores
export const selectAllUsers = (state) => state.users.users;
export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;
