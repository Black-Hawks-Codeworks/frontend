import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './process-modal.module.css';
import Icon from '../icon';
// kano import gia returns kai repairs
import NotificationsTable from './components/notifications-table';
import Actions from './components/actions';
import ProcessDetails from './components/process-details';
import StatusIndicator from './components/status-indicator';
import Loading from '../loading-screen/loading';

export default function ProcessModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  const [process, setProcess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log('processId', processId);
  useEffect(() => {
    async function getProcess() {
      const response = await fetch(`/api/process/${processId}`);
      const data = await response.json();
      console.log('data', data);
      setProcess(data);
      setIsLoading(false);
    }
    getProcess();
  }, [processId]);

  async function refetch() {
    const response = await fetch(`/api/process/${processId}`);
    const data = await response.json();
    console.log('data', data);
    setProcess(data);
    setIsLoading(false);
  }

  // Αφαιρέθηκε το if (isLoading) από εδώ

  console.log('process', process);

  //hrisimopoio ena state kai vazo mesa olo to process kai meta allazo mono ena apo ta keys tou process
  // const [actionRequired, setActionRequired] = useState(process.requiredAction);
  const actionRequired = process ? process.requiredAction : null; // Προσθήκη check επειδή στην αρχή το process είναι null
  function setActionRequired(action) {
    setProcess({ ...process, requiredAction: action });
  }

  const ActionComponent = actionRequired ? Actions[actionRequired] : Actions.noActionRequired;

  // const [status, setStatus] = useState(process.status);
  const status = process ? process.status : null; // Προσθήκη check

  const [selectedStatus, setSelectedStatus] = useState(status || '');

  const handleSelectChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  async function handleAccept() {
    const previousStatus = process.status;

    try {
      const response = await fetch(`/api/process/${processId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newRequiredAction: 'changeProcessStatus' }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      await refetch();
    } catch (error) {
      console.error('Error updating status:', error);
      setProcess({ ...process, status: previousStatus });
    }
  }

  const handleActionRequiredChange = (action) => {
    setActionRequired(action);
    //TODO: Na ginei ena fetch PUT(?) gia na allaksei to requiredAction sto backend
  };

  return (
    <dialog open={Boolean(processId)} className={styles.processModal}>
      <div className={styles.modalContent}>
        {/* kane navigate piso gia na kleisei to modal */}
        <button className={styles.closeBtn} onClick={() => navigate('../')}>
          <Icon name='Close1' size='lg' />
        </button>

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.gridContainer}>
            {/* otan teliopoiithei to parakato tha metaferoume sto diko tou file */}
            <StatusIndicator selectedStatus={status} />
            {/* <div className={styles.processDetails}> */}
            <ProcessDetails process={process} />
            {/* ean iparhei to ActionComponent tote kanei render to component */}
            {/* <div className={styles.actionsComp}> */}
            {ActionComponent && (
              <ActionComponent
                handleAccept={handleAccept}
                handleSelectChange={handleSelectChange}
                expectedCost={process.expectedCost}
                status={status}
                handleActionRequiredChange={handleActionRequiredChange}
              />
            )}
            <NotificationsTable notifications={process.notifications} />
          </div>
        )}
      </div>
    </dialog>
  );
}
