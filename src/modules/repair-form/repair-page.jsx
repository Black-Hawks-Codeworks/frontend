import styles from './repair-page.module.css';
import CreateForm from '@/shared/components/forms/create-form';
import Icon from '@/shared/icon';

export default function RepairFormPage() {
  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation`}>
        <CreateForm title='Repair Form' showProblemDescription={true} />
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Icon name='InfoSquare' size='lg' />
            <p className='header-md'>INFO</p>
          </div>
          <ul className='body-xl'>
            <li>
              <Icon name='Edit2' size='md' />
              <b>Fill</b> in all required fields (marked with *)
            </li>
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
              {' your request in the "Your Parcel" section.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
