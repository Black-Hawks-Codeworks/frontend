import styles from './client-dashboard-controls.module.css';
import { Link } from 'react-router-dom';

function ClientDashboardControls() {
  return (
    <div className={styles.container}>
      <Link to='/' className='btn-contained'>
        Back(?)
      </Link>
    </div>
  );
}

export default ClientDashboardControls;
