import { useMemo } from 'react';

export function useSortedProcesses(data) {
  return useMemo(() => {
    const arr = Array.isArray(data) ? data : [];
    return [...arr].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [data]);
}
