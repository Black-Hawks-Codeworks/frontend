import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';
import { data } from '@/modules/data/mock-data';
import { Outlet } from 'react-router-dom';

function TechnicianDashboardPage() {
  const repairData = data.filter((x) => x.type === 'repair');

  return (
    <div>
      <TechnicianDashboardControls />
      <ProcessTable data={repairData} />
      <Outlet />
    </div>
  );
}

export default TechnicianDashboardPage;
