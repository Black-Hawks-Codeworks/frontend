import styles from './repair-page.module.css';
import CreateForm from '@/shared/forms/create-form';
import Icon from '@/shared/icon';

import { useCreateProcess } from '@/shared/hooks/use-create-process';

export default function RepairFormPage() {
  const { handleCreateProcess, isLoading } = useCreateProcess();

  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation-5`}>
        <CreateForm
          title='Repair Form'
          onSubmit={handleCreateProcess}
          showProblemDescription={true}
          isLoading={isLoading}
        />
        <div className={styles.infoBox}>
          <p className='header-md'>Need help?</p>
          <ul className='body-xl'>
            <li>
              <Icon name='Edit2' size='md' />
              <b>Fill</b> in all required fields (marked with *).
            </li>
            <br />
            <li>
              <Icon name='Image1' size='md' />
              <b>Attach</b> clear photos of the issue if available.
            </li>
            <li>
              <Icon name='Send' size='md' />
              <b>Submit</b> your request and wait for confirmation email.
            </li>
            <li>
              <Icon name='Search1' size='md' />
              <b>Track</b>
              {' your request in the "Dashboard" section.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
