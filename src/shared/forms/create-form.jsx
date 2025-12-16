import FormField from './form-field';
import styles from './form.module.css';
import { useState } from 'react';

export default function CreateForm({ title, showProblemDescription = false }) {
  const [inputs, setInputs] = useState({
    productType: '',
    serialNumber: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(inputs);
    alert('submitted');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`${styles.form}  card-elevation-3`}>
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
            label='Serial number*'
            id='serialNumber'
            type='text'
            placeholder='03npk'
            value={inputs.serialNumber}
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
