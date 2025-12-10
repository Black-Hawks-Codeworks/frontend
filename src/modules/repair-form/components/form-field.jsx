import styles from './form.module.css';
import { category } from './category';

export default function FormField({ id, label, type, placeholder, multiple }) {
  return (
    <div className={`${styles.row} body-xl`}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' && <textarea id={id} name={id} placeholder={placeholder} required />}
      {type === 'select' && (
        <select id={id} name={id} required>
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
          type={type}
          placeholder={placeholder}
          multiple
          accept={multiple}
          required={type === 'file' ? false : true}
        />
      )}
    </div>
  );
}
