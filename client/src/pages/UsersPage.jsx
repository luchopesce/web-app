import React from "react";
import UserContainer from "../components/Users/UserContainer";
import { Grid } from "@mui/material";

const UsersPage = () => {

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <UserContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersPage;
