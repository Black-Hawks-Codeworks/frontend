import styles from './process-table-row.module.css';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../../shared/utils/date';

export default function ProcessTableRow(props) {
  const { process } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
        {process.status}
      </span>
      <span className={styles.cell}>{process.customerId}</span>
      <span className={styles.cell}>{process.customer}</span>
      <span className={styles.cell}>{process.product}</span>
      <span className={styles.cell}>{process.issue}</span>
      <span className={styles.cell}>###</span>
      <span className={styles.cell}>{process.assignedTo}</span>
      <span className={styles.cell}>{`${process.expectedCost}€`}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      {/* to span einai gia keimeno div gia koutaki */}
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
          <Icon name='Right5' size='md' />
        </button>
      </div>
    </div>
  );
}
