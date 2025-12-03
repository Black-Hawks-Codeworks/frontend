import { getStore } from './store';
import { redirect } from 'react-router-dom';

export const checkAuth = () => {
  const store = getStore();
  const state = store.getState();
  const user = state.auth?.user;

  if (!user) {
    return redirect('/');
  } else {
    const userRole = user.role;
    if (userRole === 'client') {
      return redirect('/client-dashboard');
    } else if (userRole === 'employee') {
      return redirect('/employee-dashboard');
    } else if (userRole === 'technician') {
      return redirect('/technician-dashboard');
    } else if (userRole === 'manager') {
      return redirect('/manager-dashboard');
    } else {
      return redirect('/');
    }
  }
};
