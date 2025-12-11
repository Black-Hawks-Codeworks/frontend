import styles from './process-table-row.module.css';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';

// utility function gia na kano format to date gia na einai euanagnosto
// prepei na metaferthei sto /shared/utils/dates.js
// kai na ginetai import apo ekei, opou to hriazomaste
function formatDate(date) {
  return new Date(date).toLocaleDateString('el-GR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ProcessTableRow(props) {
  const { process } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{process.product}</span>
      <span className={styles.cell}>{process.category}</span>
      <span className={styles.cell}>{process.description}</span>
      <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
        {process.status}
      </span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={styles.cell}>{`${process.expectedCost}€`}</span>
      <span className={styles.cell}>{process.assignedTo}</span>
      <span className={`${styles.cell} ${styles.actionsCell}`}>
        <div className={styles.cellIcons}>
          <Icon name='Bell' size='md' />
          <button
            className='btn-outlined-icon'
            onClick={() => navigate(`${process.processId}`, { state: { ilias: 'my crazy state' } })}>
            <Icon name='Right5' size='md' />
          </button>
        </div>
      </span>
    </div>
  );
}
