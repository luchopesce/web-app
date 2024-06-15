// src/components/PostList.js
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import PostCard from "./PostCard";
import { CircularProgress } from "@mui/material";

const PostList = ({ posts, postsStatus, filteredPosts }) => {
  return (
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
  );
};

export default PostList;
