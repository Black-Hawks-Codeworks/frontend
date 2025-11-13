import { createBrowserRouter, redirect } from 'react-router-dom';

import HomePage from '@/home/page';
import Layout from '@/shared/components/layout';
import Login from '@/login/Login';

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
        {
          path: '/requests',
          element: <div>Dashboard Page</div>,
        },
        {
          path: '/client-page',
          element: <div> Client Page </div>,
        },
        {
          path: '/client-=page/requests',
          element: <div> Requests table Page</div>,
        },
        {
          path: '/client-page/requests/new_request',
          element: <div> new request page</div>,
        },
        {
          path: '/technician-page',
          element: <div>Technician Page</div>,
        },
        {
          path: '/manager-page',
          element: <div> Manager Page </div>,
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
