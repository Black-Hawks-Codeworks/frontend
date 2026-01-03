import styles from './process-table-row.module.css';
import Icon from '@/shared/icon';
import formatDate from '../../../shared/utils/date';
import TableRowActions from '@/shared/table-row-actions';

function convertBoolean(v) {
  return v === 'True' || v === true;
}

export default function ProcessTableRow(props) {
  const { process } = props;
  const isDamaged = convertBoolean(process.isDamaged);
  const warranty = convertBoolean(process.warranty);

  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{process.device.id}</span>
      <span className={styles.cell}>{process.device.name}</span>
      <span className={styles.cell}>{process.issue}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
        {process.status}
      </span>

      <TableRowActions process={process} />
    </div>
  );
}
