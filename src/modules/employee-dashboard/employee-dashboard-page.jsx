import { Outlet } from 'react-router-dom';
import EmployeeDashboardControls from './components/employee-dashboard-control';
import ProcessTable from './components/process-table';
import { data } from '@/modules/data/mock-data-employee';
import { useState } from 'react';

function EmployeeDashboardPage() {
  const [view, setView] = useState('table');

  return (
    <div className=''>
      <EmployeeDashboardControls setView={setView} />
      {view === 'table' ? <ProcessTable data={data} /> : <div>No data</div>}
      <Outlet />
    </div>
  );
}

export default EmployeeDashboardPage;
