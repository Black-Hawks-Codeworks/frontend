import Icon from '@/shared/icon';

import styles from './status-indicator.module.css';

export default function StatusIndicator(props) {
  const { selectedStatus } = props;
  const statuses = [
    { status: 'started', icon: 'Check1', isSelected: false },
    { status: 'confirmed', icon: 'Check1', isSelected: false },
    { status: 'repaired', icon: 'Check1', isSelected: false },
    { status: 'completed', icon: 'Check1', isSelected: false },
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
    <div className={styles.statusComp}>
      {mappedStatuses.map((status) => (
        <div key={status.status}>
          <Icon name={status.icon} size={status.isSelected ? 'xl' : 'lg'} />
          <p>{status.status}</p>
        </div>
      ))}
    </div>
  );
}
