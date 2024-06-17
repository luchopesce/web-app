import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/authSlice";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);

  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/home" />}</>;
};

export default PrivateRoute;
