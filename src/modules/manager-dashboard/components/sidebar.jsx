import styles from './sidebar.module.css';
import Icon from '@/shared/icon';

const icons = [
  { name: 'DocumentAdd', size: 'md', description: 'home' },
  { name: 'Down5', size: 'md', description: 'home' },
  { name: 'Document2', size: 'md', description: 'home' },
  { name: 'InfoSquare', size: 'md', description: 'home' },
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
    <div className={styles.mainSidebarContainer}>
      <div>
        <div className={styles.adminContainer}>
          <h1 className={styles.adminText}>Management Dashboard</h1>
        </div>
      </div>

      <div>
        <h4 className={styles.menu}>Menu</h4>
        <ul className={styles.ulContainer}>{iconElements}</ul>
        <div>
          <h4 className={styles.scheduledTitle}>Scheduled Events</h4>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Monthly Analysis'} />
            <label htmlFor='Monthly Analysis'>Monthly Analysis</label>
          </div>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Weekly Partner Meeting'} />
            <label htmlFor='Weekly Partner Meeting'>Weekly Partner Meeting</label>
          </div>
          <div className={styles.scheduledContainer}>
            <input type='radio' value={'Pre Christmas Gathering'} />
            <label htmlFor='Pre Christmas Gathering'>Pre Christmas Gathering</label>
          </div>
        </div>
      </div>
    </div>
  );
}
