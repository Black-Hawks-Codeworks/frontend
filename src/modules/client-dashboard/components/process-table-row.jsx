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
        <span className={styles.cell}>{process.requestType}</span>
        <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
          {process.status}
        </span>{' '}
        <span className={styles.cell}>{process.productid}</span>
        <span className={styles.cell}>{process.productType}</span>
        <span className={styles.cell}>{process.product}</span>
        <span className={styles.cell}>{process.description}</span>
        <span className={styles.cell}>{formatDate(process.createdAt)}</span>
        <span className={styles.cell}>{formatDate(process.updatedAt)}</span>
        <TableRowActions process={process} />
      </div>
    </div>
  );
}

export default ProcessTableRow;
