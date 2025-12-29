import { useState } from 'react';
import styles from './login.module.css';

export default function Login({ onSubmit }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(user, password);
      }}>
      <div className={styles.field}>
        <input
          id='username'
          className={`${styles['form-input']} ${styles['form-input--user']}`}
          placeholder=' '
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className={styles.floatingLabel} htmlFor='username'>
          Username
        </label>
      </div>
      <div className={styles.field}>
        <input
          id='password'
          name='password'
          type='password'
          className={`${styles['form-input']} ${styles['form-input--password']}`}
          placeholder=' '
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className={styles.floatingLabel} htmlFor='password'>
          Password
        </label>
      </div>
      <button className={`${styles.btnLogin} btn-contained`} type='submit'>
        {' '}
        Login{' '}
      </button>
    </form>
  );
}
