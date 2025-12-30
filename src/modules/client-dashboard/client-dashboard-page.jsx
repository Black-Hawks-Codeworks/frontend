import { Outlet } from 'react-router-dom';
import ProcessTable from './components/process-table';
import { data as newDummyData } from '@/modules/data/mock-data-employee';
import ClientDashboardControls from './components/client-dashboard-controls';

import styles from './client-dashboard-page.module.css';

function ClientDashboardPage() {
  return (
    <div className={styles.pageContainer}>
      <ClientDashboardControls />
      <ProcessTable data={newDummyData} />
      <Outlet />
    </div>
  );
}

export default ClientDashboardPage;
