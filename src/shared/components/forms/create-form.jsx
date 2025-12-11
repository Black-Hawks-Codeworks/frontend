import FormField from './form-field';
import styles from './form.module.css';
export default function CreateForm({ title, showProblemDescription = false }) {
  return (
    <div>
      <form className={styles.form}>
        <p className='header-md'>{title} </p>
        <div>
          <FormField label='Product Type*' id='product-type' type='select' />
          <FormField label='Serial number*' id='serial-number' type='text' placeholder='03npk' />
          <FormField label='Purchase date*' id='purchase-date' type='date' />
          {showProblemDescription && (
            <FormField label='Problem Description*' id='problem-description' type='textarea' />
          )}
          <FormField label='Upload images (optional)' id='upload-images' type='file' multiple='image/*' />
          <button type='submit' className={`${styles.smallBtn} btn-contained`}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
