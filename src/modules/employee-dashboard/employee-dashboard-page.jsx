import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import EmployeeDashboardControls from './components/employee-dashboard-control';
import ProcessTable from './components/process-table';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '../../shared/hooks/use-processes';
import Loading from '../../shared/loading-screen/loading';

function EmployeeDashboardPage() {
  const [view, setView] = useState('table');

  const user = useAppSelector((s) => s.auth.user);
  const userId = user?.id || user?.userId;

  const { processes, loading, error, refetch } = useProcesses('employee', userId);

  return (
    <div>
      <EmployeeDashboardControls view={view} setView={setView} />

      {!user && <div>Please login.</div>}

      {user && loading && <div><Loading/></div>}

      {user && !loading && error && (
        <div>
          <div>Error: {error}</div>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {user && !loading && !error && (
        <>{view === 'table' ? <ProcessTable data={processes || []} /> : <div>No data</div>}</>
      )}

      <Outlet />
    </div>
  );
}

export default EmployeeDashboardPage;
