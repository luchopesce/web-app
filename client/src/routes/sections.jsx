import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LayoutPage = lazy(() => import("../pages/LayoutPage"));
const PostsPage = lazy(() => import("../pages/PostsPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const AuthCallback = lazy(() => import("../pages/AuthCallback"));
const PrivateRoute = lazy(() => import("../components/Login/PrivateRoute"));
const ProtectedPage = lazy(() => import("../pages/ProtectedPage"));

const Router = () => {
  const routes = useRoutes([
    {
      path: "/auth",
      element: (
        <Suspense fallback={<CircularProgress />}>
          <AuthCallback />
        </Suspense>
      ),
    },
    {
      element: (
        <Suspense fallback={<CircularProgress />}>
          <LayoutPage />
        </Suspense>
      ),
      children: [
        { path: "/posts", element: <PostsPage /> },
        {
          element: <PrivateRoute />,
          children: [
            { path: "/users", element: <UsersPage /> },
            { path: "/protected", element: <ProtectedPage /> },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/posts" replace />,
    },
    {
      path: "*",
      element: <Navigate to="/posts" replace />,
    },
  ]);

  return routes;
};

export default Router;
