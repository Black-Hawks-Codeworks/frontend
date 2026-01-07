import { useNavigate } from 'react-router-dom';
import styles from './process-cards.module.css';
import warrantyStyle from '@/shared/warranty.module.css';
import formatDate from '../../../shared/utils/date';
import { getWarrantyStatus } from '../../../shared/utils/warrantystatus';

function ProcessCards({ data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.grid}>
      {data.map((row) => (
        <div className={styles.card} key={row.processId}>
          <div className={styles.topRow}>
            <div>
              <div className={styles.label}>Process ID</div>
              <div className={styles.value}>{row.processId}</div>
            </div>

            <div className={`${styles[row.status.trim().toLowerCase()]} ${styles.status}`}>{row.status}</div>
          </div>

          <div className={styles.body}>
            <div>
              <div className={styles.label}>Request Type</div>
              <div className={styles.value}>{row.type}</div>
            </div>

            <div>
              <div className={styles.label}>Device</div>
              <div className={styles.value}>{row.device.name}</div>
            </div>

            <div>
              <div className={styles.label}>Warranty</div>
              <div
                className={`${styles.value}
                           ${
                             getWarrantyStatus(row.device.warranty) === 'In warranty'
                               ? warrantyStyle.inWarranty
                               : getWarrantyStatus(row.device.warranty) === 'Out of warranty'
                                 ? warrantyStyle.outOfWarranty
                                 : warrantyStyle.noWarranty
                           }`}>
                {getWarrantyStatus(row.device.warranty)}
              </div>
            </div>

            <div>
              <div className={styles.label}>Description</div>
              <div className={styles.value}>{row.issue}</div>
            </div>

            <div className={styles.dates}>
              <div>
                <div className={styles.label}>Created At</div>
                <div className={styles.value}>{formatDate(row.createdAt)}</div>
              </div>
              <div>
                <div className={styles.label}>Updated At</div>
                <div className={styles.value}>{formatDate(row.updatedAt)}</div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button type='button' className={styles.actionBtn} onClick={() => navigate(`${row.processId}`)}>
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessCards;
