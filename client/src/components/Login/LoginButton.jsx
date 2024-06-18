import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "../../features/authSlice";
import { Box, Button, Stack } from "@mui/material";
import Iconify from "../../helpers/iconify/iconify";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const loginWithGoogle = () => {
    window.location.href = `${process.env.REACT_APP_API_SERVER_URL}/auth/google`;
  };

  const handleLoginClick = async () => {
    if (!isAuthenticated) {
      loginWithGoogle();
    } else {
      dispatch(logout());
    }
  };

  const handleUsersClick = () => {
    navigate("/users");
  };

  const handlePostsClick = () => {
    navigate("/posts");
  };

  const handleToProtected = () => {
    navigate("/protected");
  };

  return (
    <Stack direction="row" justifyContent="flex-end">
      {isAuthenticated &&  (
        <Box display="flex" mt={2} mr={2}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleUsersClick}
          >
            Users
          </Button>
        </Box>
      )}
        <Box display="flex" mt={2} mr={2}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handlePostsClick}
          >
            Posts
          </Button>
        </Box>
      <Box display="flex" mt={2} mr={2}>
        <Button variant="contained" color="inherit" onClick={handleToProtected}>
          Page protected
        </Button>
      </Box>
      <Box display="flex" mt={2} mr={2}>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="devicon:google" />}
          onClick={handleLoginClick}
        >
          {isAuthenticated ? "Logout" : "SignIn"}
        </Button>
      </Box>
    </Stack>
  );
};

export default LoginButton;
