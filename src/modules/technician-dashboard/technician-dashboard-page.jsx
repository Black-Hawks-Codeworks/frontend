import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';
import { data } from '@/modules/data/mock-data';
import { Outlet } from 'react-router-dom';

function TechnicianDashboardPage() {
  return (
    <div>
      <TechnicianDashboardControls />
      <ProcessTable data={data} />
      <Outlet />
    </div>
  );
}

export default TechnicianDashboardPage;
