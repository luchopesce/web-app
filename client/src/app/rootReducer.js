import { combineReducers } from 'redux';
import postsReducer from '../features/posts/postsSlice.js';
import commentsReducer from "../features/posts/commentSlice.js";

// Creando el root reducer para combinar todos los reducers y utilizar un solo store
const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
