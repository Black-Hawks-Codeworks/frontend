import { useState } from 'react';
import Icon from '@/shared/icon';
import styles from './actions.module.css';
import Loading from '../../loading-screen/loading';

function ActionPaymentRequired(props) {
  const { expectedCost, handleUpadateProcess, isActionLoading } = props;
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon name='Danger1' size='md' className={styles.icon} />
        <p>
          {`To finish your repair, there is an additional cost of ${expectedCost ? expectedCost : 0}€.
          Would you like to proceed?`}
        </p>
      </div>
      <div className={styles.buttons}>
        {isActionLoading ? (
          <span>
            <Loading />
          </span>
        ) : (
          <>
            <button
              onClick={() => handleUpadateProcess({ clientAction: 'hasAcceptedPayment', expectedCost })}
              className='btn-contained'>
              Accept
            </button>
            <button className='btn-outlined'>Decline</button>
          </>
        )}
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

function ActionChangeProcessStatus(props) {
  const { handleUpadateProcess, status, isActionLoading, userRole, processType } = props;

  function getTechnicianActionLabel(s) {
    switch (s) {
      case 'confirmed':
        return 'Mark the device as in process.';
      case 'processing':
        return 'Mark the process as completed.';
      default:
        return 'Move the process to the next step.';
    }
  }

  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <p>{getTechnicianActionLabel(status)}</p>
      </div>
      <div className={styles.buttons}>
        {isActionLoading ? (
          <span>
            <Loading />
          </span>
        ) : (
          <>
            <button
              onClick={() => handleUpadateProcess({ clientAction: 'hasChangedProcessStatus' })}
              className='btn-contained'>
              Move to Next Step
            </button>
            {userRole === 'technician' && processType === 'repair' && (
              <button
                onClick={() => handleUpadateProcess({ clientAction: 'request payment' })}
                className='btn-contained'>
                Request Payment
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
function ActionNoActionRequired() {
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>

      <div className={styles.noActionWrapper}>
        <p className={styles.noActionTitle}>No action needed</p>
        <p className={styles.noActionSubtitle}>This process doesn’t require any action from you right now.</p>
      </div>
    </div>
  );
}

function ActionAddCost(props) {
  const { handleCostSubmit, isActionLoading } = props;
  const [cost, setCost] = useState('');

  const onSubmit = () => {
    if (!cost || parseFloat(cost) <= 0) {
      alert('Give a valid Cost.');
      return;
    }
    handleCostSubmit(cost);
  };

  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon name='Danger1' size='md' className={styles.icon} />
        <div>
          <p>Add the Repair Cost:</p>
          <input
            type='number'
            min='0'
            step='0.01'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder='e.g. 50.00'
            style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            disabled={isActionLoading}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        {isActionLoading ? (
          <span>
            <Loading />
          </span>
        ) : (
          <button onClick={onSubmit} className='btn-contained'>
            Submit Cost
          </button>
        )}
      </div>
    </div>
  );
}
const Actions = {
  paymentRequired: ActionPaymentRequired,
  confirmReplacement: ActionConfirmReplacement,
  changeProcessStatus: ActionChangeProcessStatus,
  noActionRequired: ActionNoActionRequired,
  addCost: ActionAddCost,
};
export default Actions;
