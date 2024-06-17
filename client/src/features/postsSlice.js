import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiExternInstance, apiServerInstance } from "../api/api.js";
import socket from "../api/socket.js";

// Estado inicial del slice de posts
const initialState = {
  posts: [],
  filteredPosts: [],
  status: "idle", // Puede ser 'idle', 'loading', 'succeeded' o 'failed'
  error: null,
  useServer: true, // Nuevo estado para controlar la fuente de datos
  uniqueTags: [], // Estado para almacenar los tags únicos
  selectedTag: "", // Estado para almacenar el tag seleccionado
};

// Thunk asíncrono para obtener los posts desde la API
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { getState }) => {
    const state = getState();
    const axiosInstance = state.posts.useServer
      ? apiServerInstance
      : apiExternInstance;
    try {
      const response = await axiosInstance.get("/post");
      const data = state.posts.useServer
        ? response.data.payload
        : response.data.data;
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
);

const getUniqueTags = (posts) => {
  const allTags = posts.reduce((acc, post) => {
    acc.push(...post.tags);
    return acc;
  }, []);
  return [...new Set(allTags)];
};

// Suscripción a eventos WebSocket para recibir nuevos posts en tiempo real
export const subscribeToPosts = () => (dispatch) => {
  socket.on("posts", (data) => {
    dispatch(updatePosts(data)); // Disparar una acción para actualizar los posts en Redux
  });

  socket.on("connect", () => {
    dispatch(setStatus("connected"));
  });

  socket.on("disconnect", () => {
    dispatch(setStatus("disconnected"));
  });
};

// Creación del slice de posts
const postsSlice = createSlice({
  name: "posts",
  initialState, // Estado inicial definido anteriormente
  reducers: {
    setTagFilter: (state, action) => {
      state.selectedTag = action.payload;
      state.filteredPosts = state.posts.filter((post) =>
        post.tags.includes(action.payload)
      );
    },
    clearFilter: (state) => {
      state.selectedTag = "";
      state.filteredPosts = [];
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.uniqueTags = getUniqueTags(action.payload); // Actualizar uniqueTags cuando se establecen los posts
      state.status = "succeeded";
    },
    updatePosts: (state, action) => {
      state.posts = action.payload;
      state.uniqueTags = getUniqueTags(action.payload); // Actualizar uniqueTags cuando se actualizan los posts
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setUseServer: (state, action) => {
      state.useServer = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Manejo de acciones asíncronas con createAsyncThunk
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
        state.uniqueTags = getUniqueTags(action.payload); // Actualizar uniqueTags cuando se obtienen los posts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  updatePosts,
  setStatus,
  setUseServer,
  setTagFilter,
  clearFilter,
  setPosts,
} = postsSlice.actions;

export default postsSlice.reducer;

// Selectores
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectUseServer = (state) => state.posts.useServer;
export const selectPostsFilter = (state) => state.posts.filteredPosts;
export const selectPostTag = (state) => state.posts.selectedTag;
export const selectGetTags = (state) => state.posts.uniqueTags;
