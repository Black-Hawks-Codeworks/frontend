import { useState, useEffect, useCallback } from 'react';

export function useProcesses(userType, userId) {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProcesses = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/processes/${userType}?userId=${userId}`);

      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      setProcesses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userType, userId]);

  useEffect(() => {
    fetchProcesses();
  }, [fetchProcesses]);

  return { processes, loading, error, refetch: fetchProcesses };
}
