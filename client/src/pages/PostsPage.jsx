import React from "react";
import PostContainer from "../components/Posts/PostContainer";
import { Grid } from "@mui/material";

const HomePage = () => {

  return (
    <>
      <Grid container direction="column" spacing={2}>

        <Grid item>
          <PostContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
