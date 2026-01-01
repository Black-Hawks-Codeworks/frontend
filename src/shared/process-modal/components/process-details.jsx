import styles from './process-details.module.css';
// import myImage from '@/assets/products/iphone14.png';

export default function ProcessDetails(props) {
  const { process } = props;
  return (
    <div className={`${styles.processDetails} card-elevation-5`}>
      <p className={`${styles.header} header-md`}>Details</p>
      {/* <div className={styles.form1}> */}
      <div className={styles.photoContainer}>
        {/* <img src={process.image} alt='product-preview' /> */}
        {process.image?.slice(0, 3).map((img, index) => (
          <img key={img} src={img} alt={`product-preview-${index}`} />
        ))}
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <span className={styles.title}>Customer</span>
          <span className={styles.value}> {process.client.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Product Name</span>
          <span className={styles.value}> {process.device.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Product ID</span>
          <span className={styles.value}> {process.device.id}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Assigned to</span>
          <span className={styles.value}>{process.technician.id}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Created at</span>
          <span className={styles.value}>{process.createdAt}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Issue</span>
          <span className={styles.value}>{process.issue}</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
