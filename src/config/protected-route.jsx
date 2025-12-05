import { getStore } from './store';
import { Navigate } from 'react-router-dom';

export function ProtectedRouteLogin({ requireLogin, children }) {
  const user = getStore().getState().auth.user;
  const isLoggedIn = Boolean(user);
  if (requireLogin) {
    if (!isLoggedIn) {
      return <Navigate to='/' replace />;
    }
  }

  return <>{children}</>;
}

export function ProtectedRouteRole({ requiredRole, children }) {
  const user = getStore().getState().auth.user;
  const userRole = user?.role;
  if (requiredRole !== userRole) {
    return <Navigate to={`/${userRole}-dashboard`} />;
  }
  return <>{children}</>;
}
