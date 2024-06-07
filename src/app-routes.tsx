import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/pages/root';

const router = createBrowserRouter([{ path: '/', element: <Root /> }]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
