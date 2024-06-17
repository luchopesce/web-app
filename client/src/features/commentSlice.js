import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiExternInstance } from "../api/api";

// Estado inicial del slice de comentarios
const initialState = {
  commentsByPostId: {}, // Objeto para almacenar comentarios por ID de post
  status: {}, // Objeto para almacenar el estado de carga por ID de post
  error: null,
};

// Thunk asíncrono para obtener los comentarios por ID de post desde la API
export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (postId) => {
    try {
      const response = await apiExternInstance.get(`post/${postId}/comment`);
      return { postId, data: response.data.data }; // Devuelve el ID de post junto con los comentarios
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }
);

// Creación del slice de comentarios
const commentsSlice = createSlice({
  name: "comments",
  initialState, // Estado inicial definido anteriormente
  reducers: {
    setStatus: (state, action) => {
      const { postId, status } = action.payload;
      state.status[postId] = status;
    },
  },
  extraReducers: (builder) => {
    // Manejo de acciones asíncronas con createAsyncThunk
    builder
      .addCase(fetchCommentsByPostId.pending, (state, action) => {
        const postId = action.meta.arg;
        state.status[postId] = "loading";
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        const { postId, data } = action.payload;
        state.status[postId] = "succeeded";
        state.commentsByPostId[postId] = data;
      })
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        const postId = action.meta.arg;
        state.status[postId] = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setStatus } = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectCommentsByPostId = (state, postId) =>
  state.comments.commentsByPostId[postId];
export const selectCommentsStatusByPostId = (state, postId) =>
  state.comments.status[postId];
export const selectCommentsError = (state) => state.comments.error;
