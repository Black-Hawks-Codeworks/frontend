import { createBrowserRouter, redirect } from 'react-router-dom';

import LandingPage from '../modules/landing/page';
import Layout from '@/shared/components/layout';
import Login from '@/modules/landing/components/Login';
import { getStore } from './store';
import ClientDashboardPage from '@/modules/client-dashboard/client-dashboard-page';
import TechnicianDashboardPage from '@/modules/technician-dashboard/technician-dashboard-page';
import EmployeeDashboardPage from '@/modules/employee-dashboard/employee-dashboard-page';


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
        {
          path: '/requests',
          element: <div>Dashboard Page</div>,
        },
        {
          path: '/client-dashboard',
          element: <ClientDashboardPage />,
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
          path: '/technician-dashboard',
          element: <TechnicianDashboardPage />,
        },
        {
          path:'/employee-dashboard',
          element:<EmployeeDashboardPage />
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
