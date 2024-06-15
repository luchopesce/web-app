import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  selectAllPosts,
  selectPostsStatus,
  subscribeToPosts,
  setUseServer,
  selectUseServer,
  setTagFilter,
  clearFilter,
  selectGetTags,
  selectPostTag,
  selectPostsFilter,
} from "../../features/posts/postsSlice";
import socket from "../../api/socket.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Iconify from "../iconify/iconify";
import PostCard from "./PostCard";
import { CircularProgress } from "@mui/material";

const PostContainer = () => {
  const dispatch = useDispatch();
  const {
    posts,
    status: postsStatus,
    useServer,
    selectedTag,
    uniqueTags,
    filteredPosts,
  } = useSelector((state) => ({
    posts: selectAllPosts(state),
    status: selectPostsStatus(state),
    useServer: selectUseServer(state),
    selectedTag: selectPostTag(state),
    uniqueTags: selectGetTags(state),
    filteredPosts: selectPostsFilter(state),
  }));

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("getPosts");
    });

    socket.on("disconnect", () => {
      toggleDataSource();
    });

    dispatch(subscribeToPosts());

    if (postsStatus === "idle" || postsStatus === "disconnected") {
      dispatch(fetchPosts());
    }

    return () => {
      socket.off("posts");
    };
  }, [dispatch, postsStatus, useServer]);

  const handleTagClick = (tag) => {
    dispatch(setTagFilter(tag));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  const toggleDataSource = useCallback(() => {
    dispatch(setUseServer(!useServer));
    dispatch(fetchPosts());
  }, [dispatch, useServer]);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Posts</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={toggleDataSource}
        >
          {useServer ? "Switch to External API" : "Switch to Server"}
        </Button>
      </Stack>

      {(postsStatus === "succeeded" || postsStatus === "connected") &&
        posts.length > 0 && (
          <Stack spacing={2} mb={3} direction="row" flexWrap="wrap">
            {uniqueTags.map((tag) => (
              <Button
                key={tag}
                variant={tag === selectedTag ? "contained" : "outlined"}
                color="secondary"
                onClick={() => handleTagClick(tag)}
                style={{
                  marginLeft: "0px",
                  marginInline: "5px",
                  marginBottom: "8px",
                }} // Añadir margen inferior
              >
                {tag}
              </Button>
            ))}

            {filteredPosts.length > 0 && (
              <Button
                variant="contained"
                color="inherit"
                onClick={handleClearFilter}
              >
                Limpiar tags
              </Button>
            )}
          </Stack>
        )}

      <Grid container spacing={3}>
        {postsStatus === "loading" && <CircularProgress />}
        {postsStatus === "failed" && (
          <Typography variant="h6">
            Failed to load posts. Please try again later.
          </Typography>
        )}
        {postsStatus === "succeeded" && posts.length === 0 && (
          <Typography variant="h6">No posts available.</Typography>
        )}
        {(postsStatus === "succeeded" || postsStatus === "connected") &&
          (filteredPosts.length > 0 ? filteredPosts : posts).map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default PostContainer;
