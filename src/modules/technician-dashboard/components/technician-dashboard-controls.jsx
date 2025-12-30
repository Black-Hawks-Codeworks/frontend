import styles from './technician-dashboard-controls.module.css';
//import { Link } from 'react-router-dom';

function TechnicianDashboardControls() {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Technician Dashboard </h1>
      <div className={styles.containerbottom}>{/* kapoio button gia allagi tou view.... */}</div>
    </div>
  );
}

export default TechnicianDashboardControls;
