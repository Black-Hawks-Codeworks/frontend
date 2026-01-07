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

  // const repairData = (processes || []).filter((x) => x.type === 'repair');
  const filteredData = (processes || []).filter((x) => {
    const isRepair = x.type === 'repair';

    // if no search, just repairs req
    if (!searchTerm) return isRepair;

    const search = searchTerm.toLowerCase();
    const matchesSearch =
      x.processId?.toString().includes(search) ||
      (x.device?.name || '').toLowerCase().includes(search) ||
      (x.client?.username || '').toLowerCase().includes(search);

    return isRepair && matchesSearch;
  });

  // Sorting gia to hook sto merge
  // const sortedProcesses = useSortedProcesses(filteredData);
  const repairData = (processes || []).filter((x) => x.type === 'repair');
  const sortedProcesses = useSortedProcesses(repairData);

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
      {/* sto merge exoume ta sortedProcesses */}
      {/* {!loading && !error && <ProcessTable data={repairData} />} */}
      {!loading && !error && <ProcessTable data={filteredData} />}
      {!loading && !error && <ProcessTable data={sortedProcesses} />}

      <Outlet context={{ refetchProcesses: refetch }} />
    </div>
  );
}

export default TechnicianDashboardPage;
