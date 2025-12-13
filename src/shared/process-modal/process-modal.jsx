import { useParams, useNavigate } from 'react-router-dom';
import styles from './process-modal.module.css';
import Icon from '../icon';
// kano import gia returns kai repairs
import { data as returns } from '@/modules/employee-dashboard/mock-data';
import NotificationsTable from './components/notifications-table';

export default function ProcessModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  // hrisimopoiisete gia na anoigei to modal me open={Boolean(processId)
  //pernoume to processId apo to url
  // hrisimopoiise to gia na kaneis search mesa sto dummy data kai na vreis to sosto process
  console.log('processId', processId);
  console.log('returns', returns);
  const process = returns.find((r) => r.processId === Number(processId));
  console.log('process', process);

  const stages = ['themis', 'dimitris'];
  const activeIndex = 0;
  return (
    <dialog open={Boolean(processId)} className={styles.processModal}>
      <div className={styles.modalContent}>
        {/* kane navigate piso gia na kleisei to modal */}
        <button className={styles.closeBtn} onClick={() => navigate('../')}>
          <Icon name='Close1' size='lg' />
        </button>
        <div className={styles.gridContainer}>
          {/* otan teliopoiithei to parakato tha metaferoume sto diko tou file */}
          <div className={styles.statusComp}>
            {stages.map((s, i) => {
              const stateClass =
                i < activeIndex ? styles.dotDone : i === activeIndex ? styles.dotActive : styles.dotTodo;
              return (
                <div key={s} className={styles.item}>
                  <div className={`${styles.dot} ${stateClass}`}>
                    <Icon name='Share' size='md' />
                  </div>
                  <div>vaggelis</div>
                </div>
              );
            })}
          </div>
          <div className={styles.processDetails}>processDetails</div>
          <div className={styles.actionsComp}>actionsComp</div>
          <NotificationsTable notifications={process.notifications} />
        </div>
      </div>
    </dialog>
  );
}
