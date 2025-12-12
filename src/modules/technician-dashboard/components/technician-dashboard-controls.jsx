import styles from './technician-dashboard-controls.module.css';
//import { Link } from 'react-router-dom';

function TechnicianDashboardControls() {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Technician Dashboard </h1>
      <div className={styles.containerbottom}>
        <div className={styles.text2Container}>
          <h2 className='header-lg'>120</h2>
          <p className='body-lg'> Aιτήματα σε αναμονή</p>
        </div>
        <div className={styles.text2Container}>
          <h2 className='header-lg'> 12.321€ </h2>
          <p className='body-lg'>Προς Έγκριση Πίστωσης </p>
        </div>
        <div className={styles.text2Container}>
          <h2 className='header-lg'>10</h2>
          <p className='body-lg'>Νέα αιτημάτα </p>
        </div>
      </div>
      {/* <div className={styles.secondContainer}>
        <Link to='/' className='btn-contained secondButton'>
          My Tickets
        </Link>
        <Link to='/' className='btn-contained secondButton'>
          Update My Tickets
        </Link>
        <Link to='/' className='btn-contained secondButton'>
          Change a Ticket
        </Link>
      </div> */}
    </div>
  );
}

export default TechnicianDashboardControls;
