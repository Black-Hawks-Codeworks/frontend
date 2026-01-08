// src/modules/client-dashboard/pages/client-dashboard-page.jsx
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import ClientDashboardControls from './components/client-dashboard-controls';
import ProcessTable from './components/process-table';
import ProcessCards from './components/process-cards';

import styles from './client-dashboard-page.module.css';

import { useAppSelector } from '@/config/store';
import { useProcesses } from '../../shared/hooks/use-processes';
import { useSortedProcesses } from '@/shared/hooks/use-sorted-processes';
import Loading from '../../shared/loading-screen/loading';

function ClientDashboardPage() {
  const [viewMode, setViewMode] = useState('table');

  const user = useAppSelector((s) => s.auth.user);
  const userId = user?.id || user?.userId;

  const { processes, loading, error, refetch } = useProcesses('client', userId);
  const sortedProcesses = useSortedProcesses(processes || []);

  return (
    <div className={styles.pageContainer}>
      <ClientDashboardControls viewMode={viewMode} setViewMode={setViewMode} />

      {loading && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {!loading && error && (
        <div>
          <div>Error: {error}</div>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <>
          {viewMode === 'table' ? (
            <ProcessTable data={sortedProcesses || []} />
          ) : (
            <ProcessCards data={sortedProcesses || []} />
          )}
        </>
      )}

      <Outlet context={{ refetchProcesses: refetch }} />
    </div>
  );
}

export default ClientDashboardPage;
