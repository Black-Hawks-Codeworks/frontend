import styles from './process-table.module.css';




export default function ProcessTable() {
  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <ul className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>ProcessID</span>
          <span>Product</span>
          <span>Category</span>
          <span>Description</span>
          <span>Status</span>
          <span>Created At</span>
          <span>Updated At</span>
          <span>Expected Cost</span>
          <span>Assigned To</span>
        </div>
      </ul>
    </div>
  );
}
