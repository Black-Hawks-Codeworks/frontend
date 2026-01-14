import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useProcesses(userType, userId) {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const route = useLocation().pathname;

  useEffect(() => {
    if (!userType) return;

    async function fetchProcesses() {
      setLoading(true);
      setError(null);

      try {
        const url = `/api/processes/${userType}?userId=${encodeURIComponent(userId)}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch data');

        const data = await res.json();
        setProcesses(data);
      } catch (e) {
        setError(e?.message || 'Unknown error');
        setProcesses([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProcesses();
  }, [userType, userId, route]);

  return { processes, loading, error };
}
