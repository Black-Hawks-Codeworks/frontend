import FormField from './form-field';
import styles from './form.module.css';
import { useState } from 'react';

const minDate = '2007-01-01';
const maxDate = new Date().toISOString().slice(0, 10);

export default function CreateForm({ title, showProblemDescription = false, onSubmit, isLoading }) {
  const [inputs, setInputs] = useState({
    productType: '',
    name: '',
    purchaseDate: '',
    problemDescription: '',
    uploadImages: '',
  });

  const [errors, setErrors] = useState({
    purchaseDate: '',
  });

  const validatePurchaseDate = (date) => {
    if (!date) return 'Purchase date is required';

    if (date > maxDate) {
      return 'Purchase date cannot be in the future';
    }

    if (date < minDate) {
      return 'Purchase date cannot be older than 17 years';
    }

    return '';
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'file' ? target.files : target.value;
    const name = target.name;

    setInputs((values) => ({ ...values, [name]: value }));

    if (name === 'purchaseDate') {
      setErrors((prev) => ({
        ...prev,
        purchaseDate: validatePurchaseDate(value),
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseDateError = validatePurchaseDate(inputs.purchaseDate);
    if (purchaseDateError) {
      setErrors((prev) => ({ ...prev, purchaseDate: purchaseDateError }));
      return;
    }

    // ✅ Κράτα το signature όπως το έχεις στο ReturnFormPage
    onSubmit?.(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`${styles.form}  card-elevation-3`}>
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
            error={errors.purchaseDate}
            max={maxDate}
            min={minDate} // Περιορίζει το UI του ημερολογίου
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
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}>
            {isLoading ? 'SENDING...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
}
