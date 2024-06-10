import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { Skeleton } from './react-ui/skeleton';

const Root = lazy(() => import('@/pages/root'));
const Details = lazy(() => import('@/pages/details'));
const Bookmarks = lazy(() => import('@/pages/bookmarks'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Root />
      </Suspense>
    ),
  },
  {
    path: '/details/:num',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Details />
      </Suspense>
    ),
  },
  {
    path: '/bookmarks',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Bookmarks />
      </Suspense>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
