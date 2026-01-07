import styles from './process-table-row.module.css';
import warrantyStyle from '@/shared/warranty.module.css';
// import Icon from '@/shared/icon';
import formatDate from '../../../shared/utils/date';
import TableRowActions from '@/shared/table-row-actions';
import { getWarrantyStatus } from '@/shared/utils/warrantystatus';

export default function ProcessTableRow(props) {
  const { process } = props;
  const w = getWarrantyStatus(process.device.warranty);
  // gia na mhn crasharei h selida an !device
  // const deviceId = process.device?.id || 'N/A';

  const deviceName = process.device?.name || 'Unknown Device';
  const statusClass = process.status?.trim().toLowerCase().replace(/\s+/g, '') || '';

  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{process.client?.name}</span>
      <span className={styles.cell}>{deviceName}</span>
      <span
        className={`${styles.cell}
           ${
             w === 'In warranty'
               ? warrantyStyle.inWarranty
               : w === 'Out of warranty'
                 ? warrantyStyle.outOfWarranty
                 : warrantyStyle.noWarranty
           }`}>
        {w}
      </span>
      <span className={styles.cell}>{process.issue}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={`${styles[statusClass]} ${styles.cell}`}>{process.status}</span>

      <TableRowActions process={process} />
    </div>
  );
}
