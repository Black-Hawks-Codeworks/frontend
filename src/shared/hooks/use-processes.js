import { useCallback, useEffect, useState } from 'react';

export function useProcesses(userType, userId) {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProcesses = useCallback(async () => {
    if (!userType) return;

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
  }, [userType, userId]);

  useEffect(() => {
    fetchProcesses();
  }, [fetchProcesses]);

  return { processes, loading, error, refetch: fetchProcesses };
}
