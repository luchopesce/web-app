// src/hooks/usePosts.js
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  subscribeToPosts,
  setUseServer,
  selectAllPosts,
  selectPostsStatus,
  selectUseServer,
  setTagFilter,
  clearFilter,
  selectGetTags,
  selectPostTag,
  selectPostsFilter,
} from "../features/postsSlice";
import socket from "../api/socket.js";

export const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const useServer = useSelector(selectUseServer);
  const selectedTag = useSelector(selectPostTag);
  const uniqueTags = useSelector(selectGetTags);
  const filteredPosts = useSelector(selectPostsFilter);

  const toggleDataSource = useCallback(() => {
    dispatch(setUseServer(!useServer));
    dispatch(fetchPosts());
  }, [dispatch, useServer]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("getPosts");
    });

    dispatch(subscribeToPosts());

    if (postsStatus === "idle" || postsStatus === "disconnected") {
      dispatch(fetchPosts());
    }

    return () => {
      socket.off("posts");
    };
  }, [dispatch, postsStatus, useServer, toggleDataSource]);

  const handleTagClick = (tag) => {
    dispatch(setTagFilter(tag));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return {
    posts,
    postsStatus,
    useServer,
    selectedTag,
    uniqueTags,
    filteredPosts,
    toggleDataSource,
    handleTagClick,
    handleClearFilter,
  };
};
