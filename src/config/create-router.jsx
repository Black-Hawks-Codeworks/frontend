import { createBrowserRouter, redirect } from 'react-router-dom';
import { checkAuth } from '@/config/utils';

import LandingPage from '@/modules/landing/page';
import Layout from '@/shared/components/layout';
import ClientDashboardPage from '@/modules/client-dashboard/client-dashboard-page';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        //global staff (not logged in)
        {
          path: '/',
          element: <LandingPage />,
        },
        // client staff...
        {
          path: '/client-dashboard',
          element: <ClientDashboardPage />,
          loader() {
            return checkAuth();
          },
        },
        {
          path: '/return-form',
          element: <div>Requests Page</div>,
          loader() {
            return checkAuth();
          },
        },
        {
          path: '/repair-form',
          element: <div>Repair Page</div>,
          loader() {
            return checkAuth();
          },
        },
        //employ staff
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
        //technician staff
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
        //management staff
        {
          path: '/manager-dashboard',
          element: <div>Manager Dashboard Page</div>,
          loader() {
            return checkAuth();
          },
        },
        {
          path: '/about',
          element: <div>About Page</div>,
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
