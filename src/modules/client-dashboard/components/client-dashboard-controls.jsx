import styles from './client-dashboard-controls.module.css';
import { Link } from 'react-router-dom';

function ClientDashboardControls() {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Client Dashboard</h1>
      {/* otan kano navigate mesa sto domain(dld den feugo apo tin selida mas) hreisimopoio to Link apo react-router-dom, ohi to <a></a> */}
      <div className={styles.secondContainer}>
        <Link to='/' className='btn-contained'>
          Back(?)
        </Link>
        <Link to='/client-page/requests/new_request' className='btn-contained secondButton'>
          Create New
        </Link>
      </div>
    </div>
  );
}

export default ClientDashboardControls;
