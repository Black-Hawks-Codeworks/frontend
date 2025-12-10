import styles from './repair-page.module.css';
import CreateForm from './components/create-form';
import Icon from '@/shared/icon';

export default function RepairFormPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.formcontainer} card-elevation-3`}>
        <CreateForm title='REPAIR FORM' showProblemDescription={true} />
      </div>

      <div className={styles.containerBox}>
        <div className={`${styles.infoBox} card-elevation-3`}>
          <div className={styles.infoHeader}>
            <Icon name='InfoSquare' size='lg' />
            <p className='header-md'>INFO</p>
          </div>
          <ol className='body-xl'>
            <li>Fill in all required fields (marked with *)</li>
            <li>Attach clear photos of the issue if available.</li>
            <li>Submit your request and wait for confirmation email.</li>
            <li>{'Track your request in the "Your Parcel" section.'}</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
