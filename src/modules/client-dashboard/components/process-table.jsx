import ProcessTableRow from './process-table-row';

import styles from './process-table.module.css';

function ProcessTable(props) {
  const { data } = props;
  return (
    <div className={`${styles.processTableContainer} card-elevation-1`}>
      <ul className={styles.processTable}>
        <div className={styles.processTableHeader}>
          <span>Process ID</span>
          <span>Cost</span>
          <span>Name</span>
          <span>Description</span>
          <span>Status</span>
          <span>Created At</span>
          <span>Updated At</span>
          
        </div>
        {data.map((process) => (
          <ProcessTableRow key={process.id} process={process} />
        ))}
      </ul>
    </div>
  );
}

export default ProcessTable;
