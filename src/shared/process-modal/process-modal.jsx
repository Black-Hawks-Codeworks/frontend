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
import { useSelector } from 'react-redux';

export default function ProcessModal() {
  const navigate = useNavigate();
  const { processId } = useParams();
  const [process, setProcess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    async function getProcess() {
      try {
        const response = await fetch(`/api/process/${processId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProcess(data);
      } catch (error) {
        console.error('Error fetching process:', error);
        alert('Failed to load process: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProcess();
  }, [processId, user]);

  async function refetch() {
    const response = await fetch(`/api/process/${processId}`);
    const data = await response.json();
    console.log('data', data);
    setProcess(data);
  }

  const role = user?.role;
  const requiredActionKey = process?.requiredAction?.[role];

  const ActionComponent = Actions[requiredActionKey] || Actions.noActionRequired;

  async function handleUpadateProcess(processData) {
    const { clientAction, technicianAction, employeeAction, expectedCost } = processData;
    setIsActionLoading(true);
    const previousStatus = process.status;
    const newRequiredAction = {
      clientAction,
      technicianAction,
      employeeAction,
      expectedCost: expectedCost ? parseFloat(expectedCost) : null,
    };
    try {
      const response = await fetch(`/api/process/${processId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newRequiredAction,
        }),
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

  console.log('process', process);
  return (
    <dialog open={Boolean(processId)} className={styles.processModal}>
      <div className={styles.modalContent}>
        {/* kane navigate piso gia na kleisei to modal */}
        <button className={styles.closeBtn} onClick={() => navigate('../')}>
          <Icon name='Close' size='lg' />
        </button>

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.gridContainer}>
            {/* otan teliopoiithei to parakato tha metaferoume sto diko tou file */}
            <StatusIndicator selectedStatus={process?.status} />
            <ProcessDetails process={process} />
            {/* ean iparhei to ActionComponent tote kanei render to component */}
            {ActionComponent && (
              <ActionComponent
                handleUpadateProcess={handleUpadateProcess}
                userRole={user?.role}
                setProcess={setProcess}
                process={process}
                isActionLoading={isActionLoading}
              />
            )}
            <NotificationsTable notifications={process.notifications} />
          </div>
        )}
      </div>
    </dialog>
  );
}
