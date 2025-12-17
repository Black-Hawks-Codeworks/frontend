import { createBrowserRouter, redirect } from 'react-router-dom';
import { ProtectedRouteLogin, ProtectedRouteRole } from '@/config/protected-route';

import LandingPage from '@/modules/landing/page';
import Layout from '@/shared/components/layout';

import ClientDashboardPage from '@/modules/client-dashboard/client-dashboard-page';
import TechnicianDashboardPage from '@/modules/technician-dashboard/technician-dashboard-page';
import EmployeeDashboardPage from '@/modules/employee-dashboard/employee-dashboard-page';
import ManagerPage from '../modules/manager-dashboard/manager-page';


import ReturnFormPage from '@/modules/return-form/return-page';
import RepairFormPage from '../modules/repair-form/repair-page';
import ProcessDetailsModal from '@/shared/components/process-details-modal';


export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        //global staff (not logged in)
        {
          path: '/',
          element: (
            <ProtectedRouteLogin requireLogin={false}>
              <LandingPage />
            </ProtectedRouteLogin>
          ),
        },
        // client staff...
        {
          path: '/client-dashboard',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='client'>
                <ClientDashboardPage />
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
        },
        {
          path: '/return-form',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='client'>
                <ReturnFormPage />
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
        },
        {
          path: '/repair-form',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='client'>
                <RepairFormPage />
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
        },
        //employ staff
        {
          path: '/employee-dashboard',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='employee'>
                <EmployeeDashboardPage />
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
          children: [
            {
              path: ':processId',
              element: (
                <ProtectedRouteLogin requireLogin>
                  <ProtectedRouteRole requiredRole='employee'>
                    <ProcessDetailsModal />
                  </ProtectedRouteRole>
                </ProtectedRouteLogin>
              ),
            },
          ],
        },
        //technician staff
        {
          path: '/technician-dashboard',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='technician'>
                <TechnicianDashboardPage />
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
          children: [
            {
              path: ':processId',
              element: (
                <ProtectedRouteLogin requireLogin>
                  <ProtectedRouteRole requiredRole='technician'>
                    <div>Process Details Modal</div>
                  </ProtectedRouteRole>
                </ProtectedRouteLogin>
              ),
            },
          ],
        },
        //management staff
        {
          path: '/manager-dashboard',
          element: (
            <ProtectedRouteLogin requireLogin>
              <ProtectedRouteRole requiredRole='manager'>
                <ManagerPage/>
              </ProtectedRouteRole>
            </ProtectedRouteLogin>
          ),
        },
        {
          path: '/about',
          element: (
            <ProtectedRouteLogin requireLogin>
              <div>About Page</div>
            </ProtectedRouteLogin>
          ),
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
