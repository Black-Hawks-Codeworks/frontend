import styles from './employee-dashboard-control.module.css';

function EmployeeDashboardControls() {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Employee Dashboard</h1>
      <div className={styles.containerbottom}>{/* kapoio button gia allagi tou view.... */}</div>
    </div>
  );
}

export default EmployeeDashboardControls;
