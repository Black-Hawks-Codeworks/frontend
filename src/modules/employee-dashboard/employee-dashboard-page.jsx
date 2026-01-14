import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import EmployeeDashboardControls from './components/employee-dashboard-control';
import ProcessTable from './components/process-table';
import { useSortedProcesses } from '@/shared/hooks/use-sorted-processes';
import { useAppSelector } from '@/config/store';
import { useProcesses } from '../../shared/hooks/use-processes';
import Loading from '../../shared/loading-screen/loading';

function EmployeeDashboardPage() {
  const [view, setView] = useState('table');

  const user = useAppSelector((s) => s.auth.user);
  const userId = user?.id || user?.userId;

  const { processes, loading, error, refetch } = useProcesses('employee', userId);
  const sortedProcesses = useSortedProcesses(processes || []);

  return (
    <div>
      <EmployeeDashboardControls view={view} setView={setView} />

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

      {view === 'table' ? <ProcessTable data={sortedProcesses || []} /> : <div>No data</div>}

      <Outlet />
    </div>
  );
}

export default EmployeeDashboardPage;
