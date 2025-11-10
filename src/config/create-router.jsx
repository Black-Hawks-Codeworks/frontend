import { createBrowserRouter, redirect } from 'react-router-dom';

import HomePage from '@/home/page';
import Layout from '@/shared/components/layout';
import Login from '@/modules/landing/components/Login';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/dashboard',
          element: <div>Dashboard Page</div>,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      path: '*',
      loader() {
        return redirect('/');
      },
    },
  ]);
};
