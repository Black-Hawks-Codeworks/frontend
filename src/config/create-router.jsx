import { createBrowserRouter, redirect } from 'react-router-dom';

import HomePage from '@/home/page';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/dashboard',
      element: (
        <div>
          <h1>Dashboard Page </h1>
          <p>Den ehei tpt edo</p>
        </div>
      ),
    },
    {
      path: '*',
      loader() {
        return redirect('/');
      },
    },
  ]);
};
