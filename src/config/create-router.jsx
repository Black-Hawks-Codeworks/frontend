import { createBrowserRouter, redirect } from 'react-router-dom';

import HomePage from '@/home/page';
import Layout from '@/shared/components/layout';
import Login from '@/modules/landing/components/Login';
import { getStore } from './store';

export const createRouter = () => {
  const checkAuth = () => {
    const store = getStore();
    const state = store.getState();
    const user = state.auth?.user;

    if (!user) {
      return redirect('/');
    }
  };
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
          loader() {
            return checkAuth();
          },
        },
        {
          path: '/login',
          element: <Login />,
          loader() {
            return checkAuth();
          },
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
