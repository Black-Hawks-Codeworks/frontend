import { useParams, useNavigate } from 'react-router-dom';
import styles from './process-details-modal.module.css';
import Icon from '../icon';

export default function ProcessDetailsModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  //pernoume to processId apo to url
  // hrisimopoiisete gia na anoigei to modal me open={Boolean(processId)
  // hrisimopoiise to gia na kaneis search mesa sto dummy data kai na vreis to sosto process
  //kane navigate sto /employee-dashboard/ gia na to kleiseis
  //vale X svg button gia na to kleiseis

  // const process = {
  //   id: 1,
  // };
  const stages = ['themis', 'dimitris'];
  const activeIndex = 0;
  return (
    <dialog open={Boolean(processId)} className={styles.processDetailsModal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={() => navigate('../')}>
          <Icon name='Close1' size='lg' />
        </button>
        <div className={styles.gridContainer}>
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
          <div className={styles.notificationsComp}>notificationsComp</div>
        </div>
      </div>
    </dialog>
  );
}
