import styles from './process-table-row.module.css';
import warrantyStyle from '@/shared/warranty.module.css';
import formatDate from '../../../shared/utils/date';
import TableRowActions from '@/shared/table-row-actions';
import { getWarrantyStatus } from '@/shared/utils/warrantystatus';

function ProcessTableRow(props) {
  const { process } = props;
  const status = getWarrantyStatus(process.device.warranty);
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.cell}>{process.processId}</span>
        {/* `${metavliti} keimeno ${alliMetavliti}` <-olo auto tha metatrapei se ena string, mporo na valo js mesa se string*/}
        <span className={styles.cell}>{process.type}</span>
        <span
          className={`${styles.cell}
           ${
             status === 'In warranty'
               ? warrantyStyle.inWarranty
               : status === 'Out of warranty'
                 ? warrantyStyle.outOfWarranty
                 : warrantyStyle.noWarranty
           }`}>
          {status}
        </span>
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
