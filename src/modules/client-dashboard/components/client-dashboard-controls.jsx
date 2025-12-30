import styles from './client-dashboard-controls.module.css';
import { Link } from 'react-router-dom';

function ClientDashboardControls({ viewMode, setViewMode }) {
  function handleTableClick(e) {
    e.preventDefault();
    setViewMode('table');
  }

  function handleCardsClick(e) {
    e.preventDefault();
    setViewMode('cards');
  }

  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Client Dashboard</h1>
      {/* otan kano navigate mesa sto domain(dld den feugo apo tin selida mas) hreisimopoio to Link apo react-router-dom, ohi to <a></a> */}
      <div className={styles.secondContainer}>
        <Link
          to='#'
          className='btn-contained'
          onClick={handleTableClick}
          aria-current={viewMode === 'table' ? 'page' : undefined}>
          Table View
        </Link>
        <Link
          to='#'
          className='btn-contained secondButton'
          onClick={handleCardsClick}
          aria-current={viewMode === 'cards' ? 'page' : undefined}>
          Card View
        </Link>
      </div>
    </div>
  );
}

export default ClientDashboardControls;
