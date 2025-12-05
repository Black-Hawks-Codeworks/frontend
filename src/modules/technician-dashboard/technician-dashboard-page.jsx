import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';
import { data } from './mock-data';

function TechnicianDashboardPage() {
  return (
    <div className=''>
      <TechnicianDashboardControls />
      <ProcessTable data={data} />
    </div>
  );
}

export default TechnicianDashboardPage;
