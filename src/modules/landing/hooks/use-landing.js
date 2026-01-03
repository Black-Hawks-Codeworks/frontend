import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/config/store';

export default function useLanding() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //to dispatch kai to useAppSelector einai oi sinartiseis pou allazoume kai pernoume to store
  //to store einai to global state tou app, perissotera @/config/store.js

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
