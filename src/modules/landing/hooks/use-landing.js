import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/config/store';
import { useState } from 'react';

export default function useLanding() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // <--- Added Error State
  const [errorType, setErrorType] = useState(null); // 'required', 'login', 'server'

  async function authUser(username, password) {
    // Έλεγχος για κενά πεδία
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required');
      setErrorType('required');
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null); // Clear previous errors
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
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
        // We keep isLoading true while redirecting
      } else {
        dispatch(setUser(null));
        setIsLoading(false);
        // Set specific error message from backend or fallback
        setError(data.message || 'Incorrect username or password');
        setErrorType('login');
      }
    } catch (err) {
      dispatch(setUser(null));
      console.error('Error:', err);
      setIsLoading(false);
      setError('Server connection failed. Please try again.');
      setErrorType('server');
    }
  }

  return { authUser, isLoading, error, errorType }; // <--- Return error
}
