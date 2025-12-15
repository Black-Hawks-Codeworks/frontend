import Icon from '@/shared/icon';
import styles from './actions.module.css';

function ActionPaymentRequired(props) {
  const { expectedCost } = props;
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon name='Danger1' size='md' className={styles.icon} />
        <p>
          {`To finish your repair, there is an additional cost of  ${expectedCost ? expectedCost : 0}€.
          Would you like to proceed?`}
        </p>
      </div>
      <div className={styles.buttons}>
        <button className='btn-contained'>Accept</button>
        <button className='btn-outlined'>Decline</button>
      </div>
    </div>
  );
}

function ActionConfirmReplacement() {
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon name='Swap2' size='md' />
        <p>Your device is gonnna replaced with a new one. Would you like to proceed?</p>
      </div>
      <div className={styles.buttons}>
        <button className='btn-contained'>Accept</button>
        <button className='btn-outlined'>Decline</button>
      </div>
    </div>
  );
}

function ActionChangeProcessStatus() {
  return <div className={styles.actionsComp}>Actions</div>;
}

function ActionNoActionRequired() {
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon name='Check' size='md' />
        <p>
          Your request is on progress.
          <br /> No action needed.
        </p>
      </div>
    </div>
  );
}

const Actions = {
  paymentRequired: ActionPaymentRequired,
  confirmReplacement: ActionConfirmReplacement,
  changeProcessStatus: ActionChangeProcessStatus,
  noActionRequired: ActionNoActionRequired,
};

export default Actions;
