import TechnicianDashboardControls from './components/technician-dashboard-controls';
import ProcessTable from './components/process-table';

function TechnicianDashboardPage(){
  return(
    <div className=''>
      <TechnicianDashboardControls/>
      <ProcessTable/>
    </div>
  );
}

export default TechnicianDashboardPage;