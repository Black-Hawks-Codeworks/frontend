import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './process-details-modal.module.css';
import { data } from '@/modules/technician-dashboard/mock-data';
import Icon from '@/shared/icon';
import { object } from 'prop-types';

//pernoume to processId apo to url
// hrisimopoiisete gia na anoigei to modal me open={Boolean(processId)
// hrisimopoiise to gia na kaneis search mesa sto dummy data kai na vreis to sosto process
//kane navigate sto /employee-dashboard/ gia na to kleiseis
//vale X svg button gia na to kleiseis

export default function ProcessDetailsModal({ processes }) {
  const { processId } = useParams();
  const navigate = useNavigate();

  const process = useMemo(() => {
    if (!processId) return null;
    const id = Number(processId);
    return processes.find((p) => p.processId === id) ?? null;
  }, [processId, processes]);

  const STAGES = ['RECEIVED', 'DIAGNOSIS', 'REPAIR', 'READY'];
  const LABELS = {
    RECEIVED: 'Received',
    DIAGNOSIS: 'Diagnosis',
    REPAIR: 'Repairing',
    READY: 'Ready',
  };

  const STAGE_ICON = {
    RECEIVED: 'DocumentAdd',
    DIAGNOSIS: 'Search1',
    REPAIR: 'Eye',
    READY: 'Upload2',
  };

  const [stage, setStage] = useState(process?.returnStage ?? 'RECEIVED');

  useEffect(() => {
    setStage(process?.returnStage ?? 'RECEIVED');
  }, [processId, process?.returnStage]);

  if (!processId) return null;

  const close = () => navigate('..');
  const activeIndex = Math.max(0, STAGES.indexOf(stage));

  return (
    <dialog open className={styles.processDetailsModal}>
      <div className={styles.modalContent}>
        <button className={`${styles.closeBtn} btn-outlined-icon`} onClick={close}>
          <Icon name='Close1' size='md' />
        </button>

        {!process ? (
          <div>Process Not found : id {processId}</div>
        ) : (
          <>
            <h1 className={`${styles.title} header-lg text-color-grey`}>
              ProcessID: ({process.processId}) - {process.product}
            </h1>

            {/* status circles */}
            <div className={styles.circlesContainer}>
              {STAGES.map((s, i) => {
                const stateClass =
                  i < activeIndex ? styles.dotDone : i === activeIndex ? styles.dotActive : styles.dotTodo;

                return (
                  <div key={s} className={styles.stageItem}>
                    <div className={`${styles.dot} ${stateClass}`}>
                      <Icon name={STAGE_ICON[s]} size='md' />
                    </div>
                    <div className={styles.stageLabel}>{LABELS[s]}</div>
                  </div>
                );
              })}
            </div>

            {/* upodoxh gia texniko */}
            <label className={`${styles.label} header-lg text-color-grey-dark `}>
              Change Status:
              <select value={stage} onChange={(e) => setStage(e.target.value)}>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {LABELS[s]}
                  </option>
                ))}
              </select>
            </label>
            <div className={styles.descriptionContainer}>
              <p>
                <strong>Description : </strong>
                {process.description}
              </p>
              <p>
                <strong>Created At : </strong>
                {process.createdAt}
              </p>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
