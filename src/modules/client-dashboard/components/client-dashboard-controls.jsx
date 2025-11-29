import styles from './client-dashboard-controls.module.css';
import { Link } from 'react-router-dom';

function ClientDashboardControls() {
  return (
    <div className={styles.container}>
      {/* otan kano navigate mesa sto domain(dld den feugo apo tin selida mas) hreisimopoio to Link apo react-router-dom, ohi to <a></a> */}
      <Link to='/' className='btn-contained'>
        Back(?)
      </Link>
    </div>
  );
}

export default ClientDashboardControls;
