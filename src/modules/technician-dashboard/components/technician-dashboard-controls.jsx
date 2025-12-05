import styles from './technician-dashboard-controls.module.css';
import { Link } from 'react-router-dom';

function TechnicianDashboardControls() {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Technician Dashboard - Active Tickets</h1>
      <div className={styles.secondContainer}>
        <Link to='/' className='btn-contained secondButton'>
          My Tickets
        </Link>
        <Link to='/' className='btn-contained secondButton'>
          Update My Tickets
        </Link>
        <Link to='/' className='btn-contained secondButton'>
          Change a Ticket
        </Link>
      </div>
    </div>
  );
}

export default TechnicianDashboardControls;
