// src/components/PostContainer.js
import React from "react";
import { usePosts } from "../../hooks/usePosts";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Iconify from "../../helpers/iconify/iconify";
import PostList from "./PostList";
import TagFilter from "./../TagFilter/TagFilter";

const PostContainer = () => {
  const {
    posts,
    postsStatus,
    useServer,
    selectedTag,
    uniqueTags,
    filteredPosts,
    handleTagClick,
    handleClearFilter,
    toggleDataSource,
  } = usePosts();


  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Posts</Typography>
        {(postsStatus !== "loading" || postsStatus === "connected") && (
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={toggleDataSource}
          >
            {useServer ? "Switch to External API" : "Switch to Server"}
          </Button>
        )}
      </Stack>

      {(postsStatus === "succeeded" || postsStatus === "connected") &&
        posts.length > 0 && (
          <TagFilter
            uniqueTags={uniqueTags}
            selectedTag={selectedTag}
            filteredPosts={filteredPosts}
            handleTagClick={handleTagClick}
            handleClearFilter={handleClearFilter}
          />
        )}

      <PostList
        posts={posts}
        postsStatus={postsStatus}
        filteredPosts={filteredPosts}
      />
    </Container>
  );
};

export default PostContainer;
