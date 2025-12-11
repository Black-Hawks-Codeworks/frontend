import styles from './return-page.module.css';
import CreateForm from '@/shared/components/forms/create-form';
import Icon from '@/shared/icon';

export default function ReturnFormPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.formcontainer} card-elevation-3`}>
        <CreateForm title='RETURN FORM' />
      </div>

      <div className={styles.containerBox}>
        <div className={`${styles.infoBox} card-elevation-3`}>
          <div className={styles.infoHeader}>
            <Icon name='InfoSquare' size='lg' />
            <p className='header-md'>INFO</p>
          </div>
          <ol className='body-xl'>
            <li>Fill in all required fields (marked with *).</li>
            <li>Make sure the product is safely packed (preferably in original packaging).</li>
            <li>Attach clear photos of the product/issue if available.</li>
            <li>Submit your return request and wait for confirmation email.</li>
            <li>{'Track your return in the "Your Parcel" section.'}</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
