import styles from './process-table-row.module.css';
import formatDate from '../../../shared/utils/date';
import TableRowActions from '@/shared/table-row-actions';

function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.cell}>{process.processId}</span>
        {/* `${metavliti} keimeno ${alliMetavliti}` <-olo auto tha metatrapei se ena string, mporo na valo js mesa se string*/}
        <span className={styles.cell}>{process.type}</span>
        <span className={styles.cell}>{process.device.name}</span>
        <span className={styles.cell}>{process.issue}</span>

        <span className={styles.cell}>{formatDate(process.updatedAt)}</span>
        <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
          {process.status}
        </span>
        <TableRowActions process={process} />
      </div>
    </div>
  );
}

export default ProcessTableRow;
