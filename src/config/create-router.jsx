import { createBrowserRouter, redirect } from 'react-router-dom';

import LandingPage from '../modules/landing/page';
import Layout from '@/shared/components/layout';
import { getStore } from './store';
import ClientDashboardPage from '@/modules/client-dashboard/client-dashboard-page';

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
          element: <LandingPage />,
        },
        {
          path: '/client-dashboard',
          element: <ClientDashboardPage />,
          loader() {
            return checkAuth();
          },
        },
        {
          path: '/employee-dashboard',
          element: <div>Employee Dashboard Page</div>,
          loader() {
            return checkAuth();
          },
          children: [
            {
              path: ':processId',
              element: <div>Process Details Modal</div>,
              loader() {
                return checkAuth();
              },
            },
          ],
        },
        {
          path: '/technician-dashboard',
          element: <div>Technician Dashboard Page</div>,
          loader() {
            return checkAuth();
          },
          children: [
            {
              path: ':processId',
              element: <div>Process Details Modal</div>,
              loader() {
                return checkAuth();
              },
            },
          ],
        },
        {
          path: '/manager-dashboard',
          element: <div>Manager Dashboard Page</div>,
        },
        {
          path: '/return-form',
          element: <div>Requests Page</div>,
        },
        {
          path: '/repair-form',
          element: <div>Repair Page</div>,
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
