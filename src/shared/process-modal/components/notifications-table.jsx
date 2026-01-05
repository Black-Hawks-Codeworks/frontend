import styles from './notifications-table.module.css';
import formatDate from '@/shared/utils/date';
import Icon from '@/shared/icon';

export default function NotificationsTable(props) {
  const { notifications } = props;
  const sortedNotifications = notifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className={`${styles.notificationsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Notifications</p>
      <div className={styles.notificationsTableHeader}>
        <span className='body-md'>Created At</span>
        <span className='body-md'>Message</span>
      </div>
      {sortedNotifications.map((notification) => (
        <div key={notification.id} className={styles.notificationsTableRow}>
          <span>
            <Icon name='Calendar' size='sm' />
          </span>
          <span className={styles.date}>{formatDate(notification.createdAt)}</span>
          <span className={styles.message}>{notification.message}</span>
        </div>
      ))}
    </div>
  );
}
