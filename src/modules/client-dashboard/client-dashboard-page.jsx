// src/modules/client-dashboard/pages/client-dashboard-page.jsx
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import ClientDashboardControls from './components/client-dashboard-controls';
import ProcessTable from './components/process-table';
import ProcessCards from './components/process-cards';

import styles from './client-dashboard-page.module.css';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '@/hooks/useProcesses';

function ClientDashboardPage() {
  const [viewMode, setViewMode] = useState('table');

  const user = useAppSelector((s) => s.auth.user);

  const role = user?.role;
  const userId = user?.userId; // if your field is userId, change to user?.userId

  const { processes, loading, error, refetch } = useProcesses(role, userId);

  return (
    <div className={styles.pageContainer}>
      <ClientDashboardControls viewMode={viewMode} setViewMode={setViewMode} />

      {!user && <div>Please login.</div>}

      {user && loading && <div>Loading processes...</div>}

      {user && !loading && error && (
        <div>
          <div>Error: {error}</div>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {user && !loading && !error && (
        <>{viewMode === 'table' ? <ProcessTable data={processes} /> : <ProcessCards data={processes} />}</>
      )}

      <Outlet />
    </div>
  );
}

export default ClientDashboardPage;
