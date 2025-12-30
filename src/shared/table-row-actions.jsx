import { useNavigate } from 'react-router-dom';
import Icon from './icon';
import styles from './table-row-actions.module.css';
export default function TableRowActions(props) {
  const { process } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.cellIcons}>
      <div className={styles.bellIconContainer}>
        <Icon name='Bell' size='lg' />
        {process.notifications.length > 0 && (
          <span
            // ean ipotelei notifications tote kanei render to span me to keimeno tou + tin classi me to animation
            className={`${styles.bellIcon} ${process.notifications.length > 0 && styles.bellIconContainerAnimated}`}>
            {process.notifications.length}
          </span>
        )}
      </div>
      <button className='btn-outlined-icon' onClick={() => navigate(`${process.processId}`)}>
        <Icon name='Expand1' size='lg' />
      </button>
    </div>
  );
}
