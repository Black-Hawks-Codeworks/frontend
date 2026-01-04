import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './process-modal.module.css';
import Icon from '../icon';
// kano import gia returns kai repairs
import NotificationsTable from './components/notifications-table';
import Actions from './components/actions';
import ProcessDetails from './components/process-details';
import StatusIndicator from './components/status-indicator';

export default function ProcessModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  const [process, setProcess] = useState(null);
  console.log('processId', processId);
  useEffect(() => {
    async function getProcess() {
      const response = await fetch(`/api/process/${processId}`);
      const data = await response.json();
      console.log('data', data);
      setProcess(data);
    }
    getProcess();
  }, [processId]);

  console.log('process', process);
  console.log(process.device);

  const [actionRequired, setActionRequired] = useState(process.requiredAction);

  const ActionComponent = actionRequired ? Actions[actionRequired] : Actions.noActionRequired;

  const [status, setStatus] = useState(process.status);
  const handleStatusAccept = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  const handleActionRequiredChange = (action) => {
    setActionRequired(action);
  };

  //TODO: Na bei ena politismeno loading component
  if (!process) {
    return <div>Loading...</div>;
  }

  return (
    <dialog open={Boolean(processId)} className={styles.processModal}>
      <div className={styles.modalContent}>
        {/* kane navigate piso gia na kleisei to modal */}
        <button className={styles.closeBtn} onClick={() => navigate('../')}>
          <Icon name='Close1' size='lg' />
        </button>
        <div className={styles.gridContainer}>
          {/* otan teliopoiithei to parakato tha metaferoume sto diko tou file */}
          <StatusIndicator selectedStatus={status} />
          {/* <div className={styles.processDetails}> */}
          <ProcessDetails process={process} />
          {/* ean iparhei to ActionComponent tote kanei render to component */}
          {/* <div className={styles.actionsComp}> */}
          {ActionComponent && (
            <ActionComponent
              expectedCost={process.expectedCost}
              status={status}
              handleStatusAccept={handleStatusAccept}
              handleActionRequiredChange={handleActionRequiredChange}
            />
          )}
          <NotificationsTable notifications={process.notifications} />
        </div>
      </div>
    </dialog>
  );
}
