import styles from './form.module.css';
import { category } from '../../modules/repair-form/category';

export default function FormField({ id, label, type, placeholder, multiple, onChange, required }) {
  return (
    <div className={styles.row}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' && (
        <textarea id={id} name={id} placeholder={placeholder} onChange={onChange} required={required} />
      )}
      {type === 'select' && (
        <select id={id} name={id} onChange={onChange} required={required}>
          <option value=''>Select a product</option>
          {category.map((item) => (
            <option key={item.categoryId} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      )}
      {type !== 'textarea' && type !== 'select' && (
        <input
          id={id}
          name={id}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          multiple={multiple}
          required={required}
        />
      )}
    </div>
  );
}
