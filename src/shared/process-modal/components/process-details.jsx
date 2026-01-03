import styles from './process-details.module.css';

export default function ProcessDetails({ process }) {
  const images = process?.device?.image; // <-- σωστό πεδίο

  return (
    <div className={`${styles.processDetails} card-elevation-5`}>
      <p className={`${styles.header} header-md`}>Details</p>

      <div className={styles.photoContainer}>
        {Array.isArray(images) &&
          images
            .slice(0, 3)
            .map((imgUrl) => (
              <img key={`${process?.device?.id ?? 'device'}-${imgUrl}`} src={imgUrl} alt='product-preview' />
            ))}
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
      </div>
    </div>
  );
}
