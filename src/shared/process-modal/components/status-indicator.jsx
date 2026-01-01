import Icon from '@/shared/icon';

import styles from './status-indicator.module.css';

export default function StatusIndicator(props) {
  const { selectedStatus } = props;
  const statuses = [
    { status: 'started', icon: 'Download2', isSelected: false },
    { status: 'confirmed', icon: 'Check1', isSelected: false },
    { status: 'repaired', icon: 'Settings', isSelected: false },
    { status: 'completed', icon: 'Send', isSelected: false },
  ];

  //perna olo to array ena ena
  const mappedStatuses = statuses.map((s) => {
    //an to status einai iso me to selectedStatus tote, spread to s kai to isSelected kanto true
    if (s.status === selectedStatus) {
      return {
        ...s,
        isSelected: true,
      };
    }
    //an den einai iso me to selectedStatus tote, return to s opos einai (isSelected false)
    return s;
  });

  console.log('mappedStatuses', mappedStatuses);
  console.log('selectedStatus', selectedStatus);
  return (
    <div className={`${styles.statusComp} card-elevation-5`}>
      {mappedStatuses.map((status) => (
        <div className={styles.item} key={status.status}>
          <div
            className={[
              styles.iconCircle,
              styles[`ring_${status.status}`],
              status.isSelected ? styles.selected : '',
            ].join(' ')}>
            <Icon name={status.icon} size={status.isSelected ? 'xl' : 'lg'} />
          </div>

          <p className={styles.label}>{status.status}</p>
        </div>
      ))}
    </div>
  );
}
