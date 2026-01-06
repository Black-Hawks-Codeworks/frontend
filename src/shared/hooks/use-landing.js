import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/config/store';
import { useState } from 'react';
export default function useLanding() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState(null);

  async function authUser(username, password, rememberMe) {
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required');
      setErrorType('required');
      return;
    }
    setError(null);
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
        if (rememberMe) {
          localStorage.setItem('rememberedUser', username);
          localStorage.setItem('rememberedPass', password);
        } else {
          localStorage.removeItem('rememberedUser');
          localStorage.removeItem('rememberedPass');
        }

        dispatch(setUser(data));
        const userRole = data.role;
        navigate(`/${userRole}-dashboard`);
      } else {
        dispatch(setUser(null));

        setError(data.message || 'Incorrect username or password');
        setErrorType('login');
      }
    } catch (err) {
      dispatch(setUser(null));
      console.error('Error:', err);

      setError('Server connection failed. Please try again.');
      setErrorType('server');
    }
  }
  return { authUser, error, errorType };
}
