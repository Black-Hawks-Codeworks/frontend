import { useState } from 'react';
import styles from './login.module.css';
import Icon from '@/shared/icon';

export default function Login({ onSubmit }) {
  const [user, setUser] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(user, password);
      }}
      className={styles.form}>
      <div className={styles.field}>
        <input
          id='username'
          className={`${styles['form-input']} ${styles['form-input--user']}`}
          placeholder=' '
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className={`${styles.label} ${styles.floatingLabel}`} htmlFor='username'>
          Username
        </label>
      </div>
      <div className={styles.field}>
        <input
          id='password'
          name='password'
          type={isPasswordVisible ? 'text' : 'password'}
          className={`${styles['form-input']} ${styles['form-input--password']}`}
          placeholder=' '
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className={`${styles.label} ${styles.floatingLabel}`} htmlFor='password'>
          Password
        </label>
        {isPasswordVisible ? (
          <button className={styles.showPasswordButton} onClick={() => setIsPasswordVisible(false)}>
            <Icon name='Hide' size='md' />
          </button>
        ) : (
          <button className={styles.showPasswordButton} onClick={() => setIsPasswordVisible(true)}>
            <Icon name='Eye' size='md' />
          </button>
        )}
      </div>
      <button className={`${styles.btnLogin} btn-contained`} type='submit'>
        Login
      </button>
    </form>
  );
}
