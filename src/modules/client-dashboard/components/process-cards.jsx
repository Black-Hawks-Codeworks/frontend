import styles from './process-cards.module.css';

function ProcessCards({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((row) => (
        <div className={styles.card} key={row.processId}>
          <div className={styles.topRow}>
            <div>
              <div className={styles.label}>Process ID</div>
              <div className={styles.value}>{row.processId}</div>
            </div>

            <div className={styles.status}>{row.status}</div>
          </div>

          <div className={styles.body}>
            <div>
              <div className={styles.label}>Request Type</div>
              <div className={styles.value}>{row.requestType}</div>
            </div>

            <div>
              <div className={styles.label}>Device</div>
              <div className={styles.value}>
                {row.deviceType} — {row.deviceName}
              </div>
            </div>

            <div>
              <div className={styles.label}>Description</div>
              <div className={styles.value}>{row.description}</div>
            </div>

            <div className={styles.dates}>
              <div>
                <div className={styles.label}>Created At</div>
                <div className={styles.value}>{row.createdAt}</div>
              </div>
              <div>
                <div className={styles.label}>Updated At</div>
                <div className={styles.value}>{row.updatedAt}</div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button type='button' className={styles.actionBtn}>
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessCards;
