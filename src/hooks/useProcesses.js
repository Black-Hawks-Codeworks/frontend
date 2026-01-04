import { useEffect, useMemo, useState } from 'react';

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);

    if (signal) {
      const onAbort = () => {
        clearTimeout(id);
        reject(new DOMException('Aborted', 'AbortError'));
      };

      if (signal.aborted) onAbort();
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
}

export function useProcesses(role, userId) {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = useMemo(() => {
    if (!role || !userId) return null;
    const params = new URLSearchParams({ userId: String(userId) });
    return `http://localhost:3000/processes/${role}?${params.toString()}`;
    // αν έχεις vite proxy, προτίμησε:
    // return `/processes/${role}?${params.toString()}`;
  }, [role, userId]);

  useEffect(() => {
    if (!url) {
      setProcesses([]);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);

      try {
        // fetch + 2s timer ΠΑΡΑΛΛΗΛΑ
        const [res] = await Promise.all([fetch(url, { signal: controller.signal }), sleep(20000, controller.signal)]);

        const data = await res.json();

        if (!res.ok) throw new Error(data?.message || 'Failed to fetch');
        if (!Array.isArray(data)) throw new Error('Expected array response');

        setProcesses(data);
      } catch (e) {
        if (e.name === 'AbortError') return;
        setError(e.message || 'Unknown error');
        setProcesses([]);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [url]);

  return { processes, loading, error };
}
