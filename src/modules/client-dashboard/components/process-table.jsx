import ProcessTableRow from './process-table-row';

import styles from './process-table.module.css';

function ProcessTable(props) {
  const { data } = props;
  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <div className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>Process ID</span>
          <span> Request Type</span>
          <span>Status</span>
          <span> Device Id</span>
          <span> Device Type</span>
          <span> Device Name</span>
          <span> Description</span>
          <span>Created At</span>
          <span>Updated At</span>
          <span> Actions</span>
        </div>
        {data.map((process) => (
          <ProcessTableRow key={process.id} process={process} />
        ))}
      </div>
    </div>
  );
}

export default ProcessTable;
