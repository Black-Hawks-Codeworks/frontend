import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '../../shared/hooks/use-processes';
import { useSortedProcesses } from '@/shared/hooks/use-sorted-processes';

import Loading from '../../shared/loading-screen/loading';

function TechnicianDashboardPage() {
  const user = useAppSelector((s) => s.auth.user);
  const userId = user?.id || user?.userId;

  const [searchTerm, setSearchTerm] = useState('');
  const { processes, loading, error, refetch } = useProcesses('technician', userId);

  const filteredData = (processes || []).filter((x) => {
    const isRepair = x.type === 'repair';

    // if no search, just repairs req
    if (!searchTerm) return isRepair;

    const search = searchTerm.toLowerCase();
    const matchesSearch =
      x.processId?.toString().includes(search) ||
      (x.device?.name || '').toLowerCase().includes(search) ||
      (x.client?.name || '').toLowerCase().includes(search) ||
      (x.status || '').toLowerCase().includes(search);

    return isRepair && matchesSearch;
  });

  // Sorting
  const sortedProcesses = useSortedProcesses(filteredData);

  return (
    <div>
      <TechnicianDashboardControls searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading && (
        <div>
          <Loading />
        </div>
      )}

      {!loading && error && (
        <div>
          <div>Error: {error}</div>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {!loading && !error && <ProcessTable data={sortedProcesses} />}

      <Outlet context={{ refetchProcesses: refetch }} />
    </div>
  );
}

export default TechnicianDashboardPage;
