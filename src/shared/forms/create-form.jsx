import FormField from './form-field';
import styles from './form.module.css';
import { useState } from 'react';

export default function CreateForm({ title, showProblemDescription = false, onSubmit }) {
  const [inputs, setInputs] = useState({
    productType: '',
    productName: '',
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
            type='select'
            value={inputs.productType}
            onChange={handleChange}
            required={true}
          />
          <FormField
            label='Product name*'
            id='productName'
            type='text'
            placeholder='iphone14'
            value={inputs.productName}
            onChange={handleChange}
            required={true}
          />
          <FormField
            label='Purchase date*'
            id='purchaseDate'
            type='date'
            value={inputs.purchaseDate}
            onChange={handleChange}
            required={true}
          />
          {showProblemDescription && (
            <FormField
              label='Problem Description*'
              id='problemDescription'
              type='textarea'
              value={inputs.problemDescription}
              onChange={handleChange}
              required={true}
            />
          )}
          <FormField
            label='Upload images (optional)'
            id='uploadImages'
            type='file'
            multiple={true}
            onChange={handleChange}
            required={false}
          />
          <button type='submit' className={`${styles.smallBtn} btn-contained`}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
