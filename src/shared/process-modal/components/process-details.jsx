import styles from './process-details.module.css';
import warrantyStyle from '@/shared/warranty.module.css';
import formatDate from '../../utils/date';
import { getWarrantyStatus } from '@/shared/utils/warrantystatus';

export default function ProcessDetails({ process }) {
  const imageUrl = `/api${process?.device?.image.url}`;

  const warranty = process.device.warranty;

  return (
    <div className={`${styles.processDetails} card-elevation-5`}>
      <p className={`${styles.header} header-md`}>Details</p>

      <div className={styles.photoContainer}>
        <img src={imageUrl} alt='product-preview' />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <span className={styles.title}>Customer</span>
          <span className={styles.value}>{process?.client?.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Product Name</span>
          <span className={styles.value}>{process?.device?.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Product ID</span>
          <span className={styles.value}>{process?.device?.id}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Assigned to</span>
          <span className={styles.value}>
            {process?.type === 'repair' ? process?.technician?.name : process?.employee?.name}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Created at</span>
          <span className={styles.value}>{formatDate(process?.createdAt)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Issue</span>
          <span className={styles.value}>{process?.issue}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Warranty</span>
          {process.device.warranty.type === 'none' ? (
            <span className={styles.value}>
              This device has <b>no</b> warranty.
            </span>
          ) : (
            <span className={styles.value}>
              This device has{' '}
              <b className={process.device.warranty.type === 'basic' ? styles.basic : styles.premium}>
                {process.device.warranty.type}
              </b>{' '}
              warranty.
            </span>
          )}
        </div>
        {process.device.warranty.type !== 'none' && (
          <div>
            <div className={styles.row}>
              <span className={styles.title}>Expires at</span>
              <span className={styles.value}>{formatDate(process?.device.warranty.expiresAt)}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.title}></span>
              <span
                className={`${styles.value}
                 ${getWarrantyStatus(warranty) === 'In warranty' ? warrantyStyle.inWarranty : warrantyStyle.outOfWarranty} `}>
                {getWarrantyStatus(warranty)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
