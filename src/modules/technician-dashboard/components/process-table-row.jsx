import styles from './process-table-row.module.css';
import Icon from '@/shared/icon';
import formatDate from '../../../shared/utils/date';

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
      <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
        {process.status}
      </span>
      <span className={styles.cell}>### </span>
      <span className={styles.cell}>{process.assignedTo} </span>
      <span className={styles.cell}>{process.category}</span>
      <span className={styles.cell}>{process.product}</span>
      <span className={styles.cell}>{process.description}</span>
      <span className={styles.cell}>
        {isDamaged ? <Icon name='Check1' size='md' /> : <Icon name='Close1' size='md' />}
      </span>
      <span className={styles.cell}>
        {warranty ? <Icon name='Check1' size='md' /> : <Icon name='Close1' size='md' />}
      </span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={`${styles.cell} ${styles.actionsCell}`}>
        <Icon name='Bell' size='md' />
        <Icon name='Right5' size='md' />
      </span>
    </div>
  );
}
