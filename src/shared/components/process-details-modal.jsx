import { useParams } from 'react-router-dom';
import styles from './process-details-modal.module.css';

export default function ProcessDetailsModal() {
  const { processId } = useParams();
  //pernoume to processId apo to url
  // hrisimopoiisete gia na anoigei to modal me open={Boolean(processId)
  // hrisimopoiise to gia na kaneis search mesa sto dummy data kai na vreis to sosto process
  //kane navigate sto /employee-dashboard/ gia na to kleiseis
  //vale X svg button gia na to kleiseis

  return (
    <dialog open={Boolean(processId)} className={styles.processDetailsModal}>
      <div className={styles.modalContent}>
        <h1>{processId}</h1>
      </div>
    </dialog>
  );
}
