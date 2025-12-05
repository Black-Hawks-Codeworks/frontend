// process-table.jsx
import styles from './process-table.module.css';
import ProcessTableRow from './process-table-row';

export default function ProcessTable(props) {
  const { data } = props;

  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <div className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>Process ID</span>
          <span>Product</span>
          <span>Customer Id</span>
          <span>Issue</span>
          <span>Priority</span>
          <span>Waiting Time</span>
          <span>Status</span>
          <span>Assigned To</span>
          <span>Created At</span>
          <span>Expected Cost</span>
          <span>Actions</span>
        </div>

        {data.map((process) => (
          <ProcessTableRow key={process.processId} process={process} />
        ))}
      </div>
    </div>
  );
}
