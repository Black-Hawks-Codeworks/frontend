import { useState } from 'react';
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

function ActionChangeProcessStatus(props) {
  //ena state gia to accept btn pou erhete apo pano(props)
  const { selectedStatus,handleSelectChange,handleAccept } = props;
  //ena local state gia na fainetai to change tis listas


  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Change process status</p>
      <div className={styles.actionrow}>
        <select id='status' name='status' value={selectedStatus} onChange={handleSelectChange}>
          <option value=''>Select the status</option>
          <option value='started'>Started</option>
          <option value='confirmed'>Confirmed</option>
          <option value='repaired'>Repaired</option>
          <option value='completed'>Completed</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleAccept} className='btn-contained'>
          Accept
        </button>
        <button title='stress relief' className='btn-outlined'>
          Decline
        </button>
      </div>
    </div>
  );
}

function ActionNoActionRequired() {
  return (
    <div className={`${styles.actionsComp} card-elevation-3`}>
      <p className={`${styles.header} header-md`}>Actions</p>
      <div className={`${styles.actionrow} body-lg`}>
        <Icon className={styles.granazi} name='Loading1' size='md' />
        <p>No action needed.</p>
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
