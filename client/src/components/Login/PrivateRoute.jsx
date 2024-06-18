import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/authSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate("/posts");
      }, 1000);
    }
  }, [isAuthenticated, navigate]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
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
              severity="error"
              onClose={handleCloseSnackbar}
            >
              No autorizado
            </MuiAlert>
          </Snackbar>
        </>
      )}
    </>
  );
};

export default PrivateRoute;
