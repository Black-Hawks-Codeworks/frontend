import ProcessTable from './components/process-table';
import { data } from './dummy-data';

import styles from './client-dashboard-page.module.css';

function ClientDashboardPage() {
  return (
    <div className={styles.pageContainer}>
      <ProcessTable data={data} />
    </div>
  );
}

export default ClientDashboardPage;
