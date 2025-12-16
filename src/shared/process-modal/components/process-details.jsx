import styles from './process-details.module.css';
import myImage from '@/assets/products/iphone14.png';

export default function ProcessDetails(props) {
  const { process } = props;
  return (
    <div className={`${styles.processDetails} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Details</p>
      {/* <div className={styles.form1}> */}
      <div className={styles.photoContainer}>
        <img src={myImage} alt='product-preview' />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.row}>
          <span>Product Type</span>
          <span> {process.device.category}</span>
        </div>
        <div className={styles.row}>
          <span>Product Name</span>
          <span> {process.device.name}</span>
        </div>
        <div className={styles.row}>
          <span>Serial Number</span>
          <span> {process.device.serialNumber}</span>
        </div>
        <div className={styles.row}>
          <span>Priority</span>
          <span>{process.priority}</span>
        </div>
        <div className={styles.row}>
          <span>Issue</span>
          <span>{process.issue}</span>
        </div>
      </div>
      {/* </div> */}
      {/* <div className={`${styles.form2} body-md`}></div> */}
    </div>
  );
}
