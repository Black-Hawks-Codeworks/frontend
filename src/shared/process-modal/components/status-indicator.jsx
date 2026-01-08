import Icon from '@/shared/icon';
import styles from './status-indicator.module.css';

export default function StatusIndicator(props) {
  const { selectedStatus, processType } = props;
  const statuses = [
    { status: 'started', icon: 'Download2', isSelected: false },
    { status: 'confirmed', icon: 'Check1', isSelected: false },
    { status: 'processing', icon: 'Settings', isSelected: false },
    { status: 'completed', icon: 'Send', isSelected: false },
  ];

  const mappedStatuses = statuses.map((s) => (s.status === selectedStatus ? { ...s, isSelected: true } : s));

  return (
    <div className={`${styles.statusComp} card-elevation-5`}>
      {mappedStatuses.map((status) => {
        const isProcessingSelected = status.status === 'processing' && status.isSelected;

        return (
          <div className={styles.item} key={status.status}>
            <div
              className={[
                styles.iconCircle,
                styles[`ring_${status.status}`],
                status.isSelected ? styles.selected : '',
              ].join(' ')}>
              <div className={isProcessingSelected ? styles.processingInner : ''}>
                <Icon name={status.icon} size={status.isSelected ? 'xl' : 'lg'} />
              </div>
            </div>

            <p className={styles.label}>
              {processType === 'repair' && status.status === 'processing' ? 'repairing' : status.status}
            </p>
          </div>
        );
      })}
    </div>
  );
}
