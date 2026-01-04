import { Outlet } from 'react-router-dom';

import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '../landing/hooks/use-processes';

function TechnicianDashboardPage() {
  const user = useAppSelector((s) => s.auth.user);

  const userId = user?.id || user?.userId;

  const { processes, loading, error, refetch } = useProcesses('technician', userId);

  const repairData = (processes || []).filter((x) => x.type === 'repair');

  return (
    <div>
      <TechnicianDashboardControls />

      {!user && <div>Please login.</div>}

      {user && loading && <div>Loading repairs...</div>}

      {user && !loading && error && (
        <div>
          <div>Error: {error}</div>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {user && !loading && !error && <ProcessTable data={repairData} />}

      <Outlet />
    </div>
  );
}

export default TechnicianDashboardPage;
