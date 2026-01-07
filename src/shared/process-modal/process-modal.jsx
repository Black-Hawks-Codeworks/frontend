import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './process-modal.module.css';
import Icon from '../icon';
// kano import gia returns kai repairs
import NotificationsTable from './components/notifications-table';
import Actions from './components/actions';
import ProcessDetails from './components/process-details';
import StatusIndicator from './components/status-indicator';
import Loading from '../loading-screen/loading';
import { useSelector } from 'react-redux';
export default function ProcessModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  const [process, setProcess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  console.log('processId', processId);
  const user = useSelector((state) => state.auth.user);
  const { refetchProcesses } = useOutletContext() || {};

  useEffect(() => {
    async function getProcess() {
      try {
        const response = await fetch(`/api/process/${processId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Backend response:', data);
        console.log('Required action:', data.requiredAction);
        console.log('User type:', user?.role); // ή user?.type

        setProcess(data);
      } catch (error) {
        console.error('Error fetching process:', error);
        alert('Failed to load process: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProcess();
  }, [processId, user]); // ✅ χωρίς eslint-disable

  async function refetch() {
    const response = await fetch(`/api/process/${processId}`);
    const data = await response.json();
    console.log('data', data);
    setProcess(data);
    setIsLoading(false);
  }

  async function handleCostSubmit(cost) {
    setIsActionLoading(true);
    try {
      const response = await fetch(`/api/process/${processId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newRequiredAction: 'addCost',
          expectedCost: parseFloat(cost),
        }),
      });

      if (!response.ok) throw new Error('Failed to add cost');
      await refetch();
    } catch (error) {
      console.error('Error adding cost:', error);
      alert('Error During adding Cost.');
    } finally {
      setIsActionLoading(false);
    }
  }

  async function handlePaymentAccept() {
    try {
      const response = await fetch(`/api/process/${processId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newRequiredAction: 'paymentAccept' }),
      });

      if (!response.ok) throw new Error('Failed');
      await refetch();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Αφαιρέθηκε το if (isLoading) από εδώ

  console.log('process', process);

  //hrisimopoio ena state kai vazo mesa olo to process kai meta allazo mono ena apo ta keys tou process
  // const [actionRequired, setActionRequired] = useState(process.requiredAction);

  console.log('=== DEBUG USER ===');
  console.log('state.auth.user:', user);
  console.log('role:', user?.role);
  console.log('==================');

  const role = user?.role;
  const requiredActionKey = process?.requiredAction?.[role];
  const isReturn = process?.type === 'return';

  let actionKeyForUI = requiredActionKey;

  //an einai return den thleoume cost / payment components
  if (isReturn && (requiredActionKey === 'paymentRequired' || requiredActionKey === 'addCost')) {
    actionKeyForUI = null;
  }

  console.log('role used for action:', role);
  console.log('requiredAction object:', process?.requiredAction);
  console.log('requiredActionKey:', requiredActionKey);
  console.log('Resolved ActionComponent:', actionKeyForUI && Actions[actionKeyForUI]);

  const ActionComponent = (actionKeyForUI && Actions[actionKeyForUI]) || Actions.noActionRequired;
  // const [status, setStatus] = useState(process.status);
  const status = process ? process.status : null; // Προσθήκη check

  async function handleAccept() {
    const previousStatus = process.status;
    setIsActionLoading(true);

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
    } finally {
      setIsActionLoading(false);
    }
  }

  return (
    <dialog open={Boolean(processId)} className={styles.processModal}>
      <div className={styles.modalContent}>
        {/* kane navigate piso gia na kleisei to modal */}
        <button
          className={styles.closeBtn}
          onClick={() => {
            if (refetchProcesses) {
              refetchProcesses();
            }
            navigate('../');
          }}>
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
                handlePaymentAccept={handlePaymentAccept}
                handleCostSubmit={handleCostSubmit}
                expectedCost={process.expectedCost}
                status={status} // για να ξέρει ποιο είναι το τρέχον status
                isActionLoading={isActionLoading} // loadining spinner
              />
            )}
            <NotificationsTable notifications={process.notifications} />
          </div>
        )}
      </div>
    </dialog>
  );
}
