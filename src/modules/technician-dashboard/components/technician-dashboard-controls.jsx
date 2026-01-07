import styles from './technician-dashboard-controls.module.css';
import Icon from '@/shared/icon';
//import { Link } from 'react-router-dom';

function TechnicianDashboardControls({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.container}>
      <h1 className='header-lg text-color-grey-dark'>Technician Dashboard </h1>
      <div className={styles.searchWrapper}>
        <div className={styles.inputContainer}>
          <Icon name='Search1' size='sm' className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Search by ID, device or customer...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className={styles.clearBtn} onClick={() => setSearchTerm('')} title='Clear search'>
              <Icon name='Close' size='sm' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechnicianDashboardControls;
