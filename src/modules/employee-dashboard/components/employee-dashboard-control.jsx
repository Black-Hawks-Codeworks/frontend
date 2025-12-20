import styles from './employee-dashboard-control.module.css';

function EmployeeDashboardControls(props) {
  const { setView } = props;
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Employee Dashboard</h1>
      <div className={styles.secondContainer}>
        <button onClick={() => setView('table')} className='btn-contained secondButton'>
          All Tickets
        </button>
        <button onClick={() => setView('update')} className='btn-contained secondButton'>
          Update Ticket
        </button>
      </div>
    </div>
  );
}

export default EmployeeDashboardControls;
