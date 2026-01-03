import { setUser } from '@/config/reducers/auth.reducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { getStore, useAppDispatch } from '@/config/store';

export default function useLanding() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //to dispatch kai to useAppSelector einai oi sinartiseis pou allazoume kai pernoume to store
  //to store einai to global state tou app, perissotera @/config/store.js

  //edo an iparhei user feugoume apo to landing page se to dashboard pou antistoixei ston role tou user
  const currentUser = getStore().getState().auth.user;
  if (currentUser) {
    const currentUserRole = currentUser.role;
    return <Navigate to={`/${currentUserRole}-dashboard`} />;
  }

  //pernoume ton user apo to backend me async function
  //to route prepei na eina lathos
  //gia na doulepsei prepei na trehei to backend
  async function authUser(username, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setUser(data));
        const userRole = data.role;
        navigate(`/${userRole}-dashboard`);
      } else {
        dispatch(setUser(null));
      }
    } catch (error) {
      dispatch(setUser(null));
      console.error('Error:', error);
    }
  }

  return { authUser };
}
