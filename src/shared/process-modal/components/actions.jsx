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
              onClick={() => handleUpadateProcess({ newRequiredAction: 'hasAcceptedPayment', expectedCost })}
              className='btn-contained'>
              Accept
            </button>
            <button
              className='btn-outlined'
              onClick={() => handleUpadateProcess({ newRequiredAction: 'hasDeclinedPayment' })}>
              Decline
            </button>
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
  const { handleUpadateProcess, process, isActionLoading, userRole, setProcess } = props;
  const processType = process?.type;
  const status = process?.status;

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
              onClick={() => handleUpadateProcess({ newRequiredAction: 'hasChangedProcessStatus' })}
              className='btn-contained'>
              Move to Next Step
            </button>
            {userRole === 'technician' &&
              processType === 'repair' &&
              status === 'started' &&
              !process?.expectedCost && (
                <button
                  onClick={() =>
                    setProcess({
                      ...process,
                      requiredAction: {
                        ...process.requiredAction,
                        technician: 'addCost',
                      },
                    })
                  }
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
  const { handleUpadateProcess, isActionLoading, setProcess, process } = props;
  const [cost, setCost] = useState();
  const isButtonDisabled = !cost || parseFloat(cost) <= 0;
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
            step='0.50'
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
          <>
            <button
              disabled={isButtonDisabled}
              onClick={() =>
                handleUpadateProcess({
                  newRequiredAction: 'hasAddedCost',
                  expectedCost: cost,
                })
              }
              className='btn-contained'>
              Submit Cost
            </button>
            <button
              onClick={() =>
                setProcess({
                  ...process,
                  requiredAction: { ...process.requiredAction, technician: 'changeProcessStatus' },
                })
              }
              className='btn-outlined'>
              Cancel
            </button>
          </>
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
