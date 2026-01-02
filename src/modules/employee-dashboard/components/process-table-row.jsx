import styles from './process-table-row.module.css';
import formatDate from '../../../shared/utils/date';
import TableRowActions from '@/shared/table-row-actions';

export default function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{process.type}</span>
      <span className={styles.cell}>{process.device.name}</span>
      <span className={styles.cell}>{process.client.name}</span>
      <span className={styles.cell}>{process.client.phone}</span>
      <span className={styles.cell}>{process.technician?.name}</span>
      <span className={styles.cell}>{process.issue}</span>
      <span className={`${styles[process.status.trim().toLowerCase()]} ${styles.cell}`}>{process.status}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>

      {/* to span einai gia keimeno div gia koutaki */}
      <TableRowActions process={process} />
    </div>
  );
}
