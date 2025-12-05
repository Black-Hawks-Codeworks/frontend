import EmployeeDashboardControls from './components/employee-dashboard-control';
import ProcessTable from './components/process-table';
import { data } from './mock-data';

function EmployeeDashboardPage() {
  return (
    <div className=''>
      <EmployeeDashboardControls />
      <ProcessTable data={data} />
    </div>
  );
}

export default EmployeeDashboardPage;
