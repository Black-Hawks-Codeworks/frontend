import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/config/store';
import { useState } from 'react'; // <--- 1. Import useState

export default function useLanding() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // 2. Create the loading state
  const [isLoading, setIsLoading] = useState(false);

  async function authUser(username, password) {
    // 3. Start loading immediately
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
        // We do NOT set isLoading(false) here.
        // We want the button to stay disabled while redirecting.
      } else {
        dispatch(setUser(null));
        setIsLoading(false); // <--- 4. Stop loading on wrong password
      }
    } catch (error) {
      dispatch(setUser(null));
      console.error('Error:', error);
      setIsLoading(false); // <--- 5. Stop loading on network error
    }
  }

  // 6. Return isLoading so the component can use it
  return { authUser, isLoading };
}
