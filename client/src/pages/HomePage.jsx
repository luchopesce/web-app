import React, { useContext } from "react";
import PostContainer from "../components/Posts/PostContainer";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthContext";
import { Button, Grid, Link, Box } from "@mui/material";
import Iconify from "../helpers/iconify/iconify";

const HomePage = () => {
  const { logged, login, logout } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Box display="flex" justifyContent="flex-end" mt={2} mr={2}>
            <Link>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<Iconify icon="devicon:google" />}
                onClick={logged ? logout : () => login('id', 'name', 'role', 'email', 'avatar')}
              >
                {logged ? "Logout" : "SignIn"}
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <PostContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
