import styles from './process-table-row.module.css';

// utility function gia na kano format to date gia na einai euanagnosto
// prepei na metaferthei sto /shared/utils/dates.js
// kai na ginetai import apo ekei, opou to hriazomaste
function formatDate(date) {
  return new Date(date).toLocaleDateString('el-GR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function ProcessTableRow(props) {
  const { process } = props;
  return (
    <div className={styles.container}>
      <span className={styles.cell}>{process.processId}</span>
      {/* `${metavliti} keimeno ${alliMetavliti}` <-olo auto tha metatrapei se ena string, mporo na valo js mesa se string*/}
      <span className={styles.cell}>{`${process.cost} €`}</span>
      <span className={styles.cell}>{process.name}</span>
      <span className={styles.cell}>{process.description}</span>
      {/* hrisimoloio to string status gia na epilexo class gia to parakato span */}
      <span className={`${styles[process.status.trim().toLowerCase().replace(/\s+/g, '')]} ${styles.cell}`}>
        {process.status}
      </span>
      {/* formated kai un formated imerominies */}
      <span className={styles.cell}>{formatDate(process.createdAt)}</span>
      <span className={styles.cell}>{process.updatedAt}</span>
    </div>
  );
}

export default ProcessTableRow;
