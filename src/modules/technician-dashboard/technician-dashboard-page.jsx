import { Outlet } from 'react-router-dom';

import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '../../shared/hooks/use-processes';

import Loading from '../../shared/loading-screen/loading';

function TechnicianDashboardPage() {
  const user = useAppSelector((s) => s.auth.user);

  const userId = user?.id || user?.userId;

  const { processes, loading, error, refetch } = useProcesses('technician', userId);

  const repairData = (processes || []).filter((x) => x.type === 'repair');

  return (
    <div>
      <TechnicianDashboardControls />

      {!user && <div>Please login.</div>}

      {user && loading && <div><Loading/></div>}

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
