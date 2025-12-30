import { Outlet } from 'react-router-dom';
import ProcessTable from './components/process-table';
import { data } from '@/modules/data/mock-data';
import ClientDashboardControls from './components/client-dashboard-controls';

import styles from './client-dashboard-page.module.css';
import { useState } from 'react';
import ProcessCards from './components/process-cards';

function ClientDashboardPage() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className={styles.pageContainer}>
      <ClientDashboardControls viewMode={viewMode} setViewMode={setViewMode} />
      {viewMode === 'table' ? <ProcessTable data={data} /> : <ProcessCards data={data} />}
      <Outlet />
    </div>
  );
}

export default ClientDashboardPage;
