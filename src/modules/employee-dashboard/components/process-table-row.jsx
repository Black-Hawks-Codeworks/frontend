import styles from './process-table-row.module.css';

// utility function gia na kano format to date gia na einai euanagnosto
// function formatDate(date) {
//   return new Date(date).toLocaleDateString('el-GR', { year: 'numeric', month: 'long', day: 'numeric' });
// }

export default function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      <span className={styles.cell}>{process.product}</span>
      <span className={styles.cell}>{process.customerId}</span>
      <span className={styles.cell}>{process.issue}</span>
      <span className={styles.cell}>{process.priority}</span>
      <span className={styles.cell}>{process.waitingTime}</span>
      <span className={`${styles[process.status.toLowerCase()]} ${styles.cell}`}>{process.status}</span>
      <span className={styles.cell}>{process.assignedTo}</span>
      <span className={styles.cell}>{process.createdAt}</span>
      <span className={styles.cell}>{`${process.expectedCost}€`}</span>
      <span className={styles.cell}>{process.actions}</span>

    </div>
  );
}
