import styles from './sidebar.module.css';
import Icon from '@/shared/icon';

const icons = [
  { name: 'DocumentAdd', size: 'md', description: 'Home' },
  { name: 'InfoSquare', size: 'md', description: 'Team Members' },
  { name: 'Down5', size: 'md', description: 'Tasks' },
  { name: 'Document2', size: 'md', description: 'Team' },
  { name: 'InfoSquare', size: 'md', description: 'Monthly Income' },
];

export default function Sidebar() {
  const iconElements = icons.map((icon) => {
    return (
      <li key={icon.name} className={styles.liContainer}>
        <Icon name={icon.name} size={icon.size} description={icon.description} />
        <p>{icon.description}</p>
      </li>
    );
  });

  return (
    <div className={`${styles.mainSidebarContainer} text-color-grey-dark`}>
      {/* <div>
        <div className={styles.adminContainer}>
          <h1 className={styles.adminText}>Management Dashboard</h1>
        </div>
      </div> */}

      <div>
        <h4 className={`${styles.menu} header-sm text-color-grey-dark`}>Menu</h4>
        <ul className={` ${styles.ulContainer} body-md`}>{iconElements}</ul>

        <div className={`${styles.mainScheduledContainer} `}>
          <h4 className={`${styles.scheduledTitle} text-color-grey-dark`}>Scheduled Events</h4>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Monthly Analysis'} />
            <label className='text-color-grey' htmlFor='Monthly Analysis'>
              Monthly Analysis
            </label>
          </div>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Weekly Partner Meeting'} />
            <label className='text-color-grey' htmlFor='Weekly Partner Meeting'>
              Weekly Partner Meeting
            </label>
          </div>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Pre Christmas Gathering'} />
            <label className='text-color-grey' htmlFor='Pre Christmas Gathering'>
              Pre Christmas Gathering
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
