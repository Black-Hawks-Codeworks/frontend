import { createBrowserRouter, redirect } from 'react-router-dom';

import LandingPage from '../modules/landing/page';
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
          element: <LandingPage />,
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
