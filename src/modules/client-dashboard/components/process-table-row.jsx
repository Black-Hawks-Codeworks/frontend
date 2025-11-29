import styles from './process-table-row.module.css';

function formatDate(date) {
  return new Date(date).toLocaleDateString('el-GR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{`${process.cost} €`}</span>
      <span className={styles.cell}>{process.name}</span>
      <span className={styles.cell}>{process.description}</span>
      <span className={`${styles[process.status.toLowerCase()]} ${styles.cell}`}>{process.status}</span>
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={styles.cell}>{formatDate(process.updatedAt)}</span>
    </div>
  );
}

export default ProcessTableRow;
