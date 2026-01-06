import styles from './process-details.module.css';

export default function ProcessDetails({ process }) {
  const imageUrl = `/api${process?.device?.image.url}`;
  console.log('imageUrl', imageUrl);
  console.log('process', process.device.image);

  const warranty = process.device.warranty;
  console.log('warranty', warranty);
  function getWarrantyStatus(w) {
    if (w.type === 'none') return 'This device has no warranty.';

    if (w.expiresAt) {
      const expires = new Date(w.expiresAt);
      const now = new Date();
      return expires >= now ? 'In warranty' : 'Out of warranty';
    }
  }

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
          <span className={styles.value}>{process?.technician?.id}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Created at</span>
          <span className={styles.value}>{process?.createdAt}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Issue</span>
          <span className={styles.value}>{process?.issue}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Warranty</span>
          {process.device.warranty.type === 'none' ? (
            <span className={styles.value}>This device has no warranty.</span>
          ) : (
            <span className={styles.value}>{`This device has ${process.device.warranty.type} warranty.`}</span>
          )}
          {process.device.warranty.type !== 'none' && (
            <span className={styles.value}>{getWarrantyStatus(warranty)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
