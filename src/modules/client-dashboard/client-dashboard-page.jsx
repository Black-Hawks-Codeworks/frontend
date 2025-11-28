import ProcessTable from './components/process-table';
import { data } from './dummy-data';

function ClientDashboardPage() {
  return (
    <div>
      <ProcessTable data={data} />
    </div>
  );
}

export default ClientDashboardPage;
