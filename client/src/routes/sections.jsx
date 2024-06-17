import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LayoutPage = lazy(() => import("../pages/LayoutPage"));
const PostsPage = lazy(() => import("../pages/PostsPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const AuthCallback = lazy(() => import("../pages/AuthCallback"));
const PrivateRoute = lazy(() => import("../components/Login/PrivateRoute"));

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<CircularProgress />}>
          <LayoutPage />
        </Suspense>
      ),
      children: [
        { path: "/posts", element: <PostsPage /> }, // Cambiado de LayoutPage a PostsPage como página inicial
        { path: "/auth", element: <AuthCallback /> },
        {
          element: <PrivateRoute />,
          children: [
            { path: "/users", element: <UsersPage /> },
            // Agrega más rutas protegidas aquí si es necesario
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
