// process-table.jsx
import styles from './process-table.module.css';
import ProcessTableRow from './process-table-row';

export default function ProcessTable(props) {
  const { data } = props;

  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <div className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>Repair Id</span>
          <span>Status</span>
          <span>Customer Id</span>
          <span>Customer name</span>
          <span>Device id</span>
          <span>Device name</span>
          <span>Description</span>
          <span>Is Damaged</span>
          <span>Warranty Status</span>
          <span>Created At</span>
          <span>Last Updated At</span>
          <span>Actions</span>
        </div>

        {data.map((process) => (
          <ProcessTableRow key={process.processId} process={process} />
        ))}
      </div>
    </div>
  );
}
