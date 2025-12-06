import { Outlet } from 'react-router-dom';
import EmployeeDashboardControls from './components/employee-dashboard-control';
import ProcessTable from './components/process-table';
import { data } from './mock-data';

function EmployeeDashboardPage() {
  return (
    <div className=''>
      <EmployeeDashboardControls />
      <ProcessTable data={data} />
      <Outlet />
    </div>
  );
}

export default EmployeeDashboardPage;
