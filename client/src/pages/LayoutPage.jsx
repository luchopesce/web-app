import React from "react";
import { Helmet } from "react-helmet-async";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import LoginButton from "../components/Login/LoginButton";

const LayoutPage = () => {
  return (
    <>
      <Helmet>
        <title>Webapp</title>
      </Helmet>
      <Grid container direction="column" spacing={2}>
      <Grid item>
          <LoginButton />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutPage;
