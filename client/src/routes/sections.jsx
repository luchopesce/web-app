import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

export const HomePage = lazy(() => import('../pages/HomePage'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
          <Suspense>
            <Outlet />
          </Suspense>
      ),
      children: [
        { element: <HomePage />, index: true },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
