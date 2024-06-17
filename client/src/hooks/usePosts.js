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
    const handleConnect = () => {
     // console.log("Socket connected.");
      socket.emit("getPosts");
    };

    const handleDisconnect = () => {
      // console.log("Socket disconnected.");
      toggleDataSource();
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    if (socket.connected) {
      handleConnect();
    }

    dispatch(subscribeToPosts());

    if (postsStatus === "idle" || postsStatus === "disconnected") {
      dispatch(fetchPosts());
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
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
