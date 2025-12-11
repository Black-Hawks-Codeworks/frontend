import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './process-details-modal.module.css';
import { data } from '@/modules/technician-dashboard/mock-data';

export default function ProcessDetailsModal() {
  const { processId } = useParams();
  const navigate = useNavigate();

  //pernoume to processId apo to url
  // hrisimopoiisete gia na anoigei to modal me open={Boolean(processId)
  // hrisimopoiise to gia na kaneis search mesa sto dummy data kai na vreis to sosto process
  //kane navigate sto /employee-dashboard/ gia na to kleiseis
  //vale X svg button gia na to kleiseis

  const process = useMemo(() => {
    if (!processId) return null;
    const id = Number(processId);
    return data.find((p) => p.processId === id) ?? null;
  }, [processId]);

  const STAGES = ['RECEIVED', 'DIAGNOSIS', 'REPAIR', 'READY'];
  const LABELS = {
    RECEIVED: 'Received',
    DIAGNOSIS: 'Diagnosis',
    REPAIR: 'Repairing',
    READY: 'Ready',
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
        <button className={styles.closeBtn} onClick={close}>X</button>

        {!process ? (
          <div>Process Not found : id {processId}</div>
        ) : (
          <>
            <h1>
              #{process.processId} — {process.product}
            </h1>

            {/* status circles */}
            <div style={{ display: 'flex', gap: 12, margin: '12px 0' }}>
              {STAGES.map((s, i) => {
                const color = i < activeIndex ? '#16a34a' : i === activeIndex ? '#2563eb' : '#cbd5e1';

                return (
                  <div key={s} style={{ textAlign: 'center', width: 90 }}>
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: color,
                        margin: '0 auto 6px auto',
                      }}
                    />
                    <div style={{ fontSize: 12 }}>{LABELS[s]}</div>
                  </div>
                );
              })}
            </div>

            {/* upodoxh gia texniko */}
            <label>
              Change Status:
              <select value={stage} onChange={(e) => setStage(e.target.value)}>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {LABELS[s]}
                  </option>
                ))}
              </select>
            </label>

            <p>Description : {process.description}</p>
            <p>Status: {process.status}</p>
          </>
        )}
      </div>
    </dialog>
  );
}
