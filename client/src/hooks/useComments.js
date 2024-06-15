// src/hooks/useComments.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCommentsByPostId,
  selectCommentsByPostId,
  selectCommentsStatusByPostId,
} from "../features/posts/commentSlice";

export const useComments = (postId, isOpen) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => selectCommentsByPostId(state, postId));
  const status = useSelector((state) => selectCommentsStatusByPostId(state, postId));
  const [loadedComments, setLoadedComments] = useState(false);

  useEffect(() => {
    if (isOpen && !loadedComments) {
      dispatch(fetchCommentsByPostId(postId));
      setLoadedComments(true);
    }
  }, [dispatch, isOpen, postId, loadedComments]);

  return {
    comments,
    status,
  };
};
