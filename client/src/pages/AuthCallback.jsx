import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectIsAuthenticated } from "../features/authSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      dispatch(login(token));
    }

    if (isAuthenticated) {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/posts");
      }, 1000);
    }
  }, [isAuthenticated, navigate, dispatch]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleCloseSnackbar}
        >
          Login exitoso!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AuthCallback;
