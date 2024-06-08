import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/pages/root';
import { Details } from '@/pages/details';

const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/details/:num', element: <Details /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
