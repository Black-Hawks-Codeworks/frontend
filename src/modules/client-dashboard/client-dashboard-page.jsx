import ProcessTable from './components/process-table';
import { data } from './dummy-data';
import ClientDashboardControls from './components/client-dashboard-controls';
import styles from './client-dashboard-page.module.css';

function ClientDashboardPage() {
  return (
    <div className={styles.pageContainer}>
      <ClientDashboardControls />
      <ProcessTable data={data} />
    </div>
  );
}

export default ClientDashboardPage;
