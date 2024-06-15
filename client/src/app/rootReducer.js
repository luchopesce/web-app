import { combineReducers } from 'redux';
import postsReducer from '../features/postsSlice.js';
import commentsReducer from "../features/commentSlice.js";

// Creando el root reducer para combinar todos los reducers y utilizar un solo store
const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
