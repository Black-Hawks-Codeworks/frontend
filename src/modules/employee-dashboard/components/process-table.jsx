// process-table.jsx
import styles from './process-table.module.css';
import ProcessTableRow from './process-table-row';

export default function ProcessTable(props) {
  const { data } = props;

  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <div className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>Return Id</span>
          <span>Status</span>
          <span>Customer ID</span>
          <span>Customer Name</span>
          <span>Device </span>
          <span>Description</span>
          <span> Αssignee Id</span>
          <span> Αssignee Name</span>
          <span>Refund </span>
          <span> Created at</span>
          <span>Actions</span>
        </div>

        {data.map((process) => (
          <ProcessTableRow key={process.processId} process={process} />
        ))}
      </div>
    </div>
  );
}
