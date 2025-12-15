import styles from './process-details.module.css';
import FormField from '@/shared/forms/form-field';

export default function ProcessDetails() {
  return (
    <div className={`${styles.processDetails} card-elevation-3`}>
      <div className={styles.form1}>
        <p>hgsnvab</p>
      </div>
      <div className={`${styles.form2} body-md`}>
        <FormField label='Estimated time' id='est-time' type='text' />
        <FormField label='Cost estimation' id='est-cost' type='text' />
      </div>
    </div>
  );
}
