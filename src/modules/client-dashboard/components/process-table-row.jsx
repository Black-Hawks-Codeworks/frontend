import styles from './process-table-row.module.css';
import formatDate from '../../../shared/utils/date';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';

function ProcessTableRow(props) {
  const { process } = props;
  const navigate = useNavigate();
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
        <div className={styles.cellIcons}>
          <Icon name='Bell' size='md' />
          <button className='btn-outlined-icon' onClick={() => navigate(`${process.processId}`)}>
            <Icon name='Right5' size='md' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProcessTableRow;
