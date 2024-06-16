import { combineReducers } from 'redux';
import postsReducer from '../features/postsSlice.js';
import commentsReducer from "../features/commentSlice.js";
import authReducer from '../features/authSlice.js';

// Creando el root reducer para combinar todos los reducers y utilizar un solo store
const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
});

export default rootReducer;
