import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../../api/api";
import { logout, selectIsAuthenticated } from "../../features/authSlice";
import { Box, Button, Stack } from "@mui/material";
import Iconify from "../../helpers/iconify/iconify";
import { useNavigate, useLocation } from "react-router-dom";

const LoginButton = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate(); // Hook para la navegación
  const location = useLocation(); // Hook para obtener la ruta actual

  const handleLoginClick = async () => {
    if (!isAuthenticated) {
      loginWithGoogle();
    } else {
      dispatch(logout());
    }
  };

  const handleUsersClick = () => {
    navigate("/users"); // Navega hacia la ruta '/users'
  };

  const handlePostsClick = () => {
    navigate("/posts"); // Navega hacia la ruta '/posts'
  };

  return (
    <Stack direction="row" justifyContent="flex-end">
      {isAuthenticated && location.pathname !== "/users" && (
        <Box display="flex" mt={2} mr={2}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleUsersClick} // Llama a handleUsersClick al hacer clic
          >
            Users
          </Button>
        </Box>
      )}
      {isAuthenticated && location.pathname === "/users" && (
        <Box display="flex" mt={2} mr={2}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handlePostsClick} // Llama a handlePostsClick al hacer clic
          >
            Posts
          </Button>
        </Box>
      )}
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
