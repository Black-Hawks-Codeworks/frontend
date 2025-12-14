import Icon from '@/shared/icon';
import styles from './actions.module.css';

function ActionPaymentRequired(props) {
  const { expectedCost } = props;
  return (
    <div className={styles.actionsComp}>
      <p>{`Tha hreiastei na pleroseis ${expectedCost ? expectedCost : 0} euros`}</p>
      <button>
        <Icon name='Check1' size='md' />
        Confirm
      </button>
    </div>
  );
}

function ActionConfirmReplacement() {
  return <div className={styles.actionsComp}>Actions</div>;
}

function ActionChangeProcessStatus() {
  return <div className={styles.actionsComp}>Actions</div>;
}

function ActionNoActionRequired() {
  return <div className={styles.actionsComp}>No action required at this moment</div>;
}

const Actions = {
  paymentRequired: ActionPaymentRequired,
  confirmReplacement: ActionConfirmReplacement,
  changeProcessStatus: ActionChangeProcessStatus,
  noActionRequired: ActionNoActionRequired,
};

export default Actions;
