import FormField from './form-field';
import styles from './form.module.css';
import { useState } from 'react';

export default function CreateForm({ title, showProblemDescription = false, onSubmit, isSubmitting }) {
  const [inputs, setInputs] = useState({
    productType: '',
    name: '',
    purchaseDate: '',
    problemDescription: '',
    uploadImages: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'file' ? target.files : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={`${styles.form}  card-elevation-3`}>
        <p className='header-lg text-color-primary-shade-2 '>{title} </p>
        <div className={styles.container}>
          <FormField
            label='Product Type*'
            id='productType'
            name='productType'
            type='select'
            value={inputs.productType}
            onChange={handleChange}
            required={true}
          />
          <FormField
            label='Product name*'
            id='name'
            name='name'
            type='text'
            placeholder='iphone14'
            value={inputs.name}
            onChange={handleChange}
            required={true}
          />
          <FormField
            label='Purchase date*'
            id='purchaseDate'
            name='purchaseDate'
            type='date'
            value={inputs.purchaseDate}
            onChange={handleChange}
            required={true}
          />
          {showProblemDescription && (
            <FormField
              label='Problem Description*'
              id='problemDescription'
              name='problemDescription'
              type='textarea'
              value={inputs.problemDescription}
              onChange={handleChange}
              required={true}
            />
          )}
          <FormField
            label='Upload images (optional)'
            id='uploadImages'
            name='uploadImages'
            type='file'
            multiple={true}
            onChange={handleChange}
            required={false}
          />
          <button
            type='submit'
            className={`${styles.smallBtn} btn-contained`}
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}>
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
}
