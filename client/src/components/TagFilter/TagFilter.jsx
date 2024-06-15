// src/components/TagFilter.js
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TagFilter = ({
  uniqueTags,
  selectedTag,
  handleTagClick,
  handleClearFilter,
  filteredPosts
}) => {
  return (
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
          }}
        >
          {tag}
        </Button>
      ))}
      {filteredPosts.length > 0 && (
        <Button variant="contained" color="inherit" onClick={handleClearFilter}>
          Limpiar
        </Button>
      )}
    </Stack>
  );
};

export default TagFilter;
