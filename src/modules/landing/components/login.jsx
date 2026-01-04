import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import Icon from '@/shared/icon';

export default function Login({ onSubmit }) {
  const [user, setUser] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <form
      className={styles.form}
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

        <button
          type='button'
          className={styles.showPasswordButton}
          onClick={() => setIsPasswordVisible((v) => !v)}
          aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}>
          <Icon name={isPasswordVisible ? 'Hide' : 'Eye'} size='md' />
        </button>
      </div>

      <div className={styles.actionsRow}>
        <label className={styles.toggle}>
          <input type='checkbox' />
          <span className={styles.track} aria-hidden='true' />
          <span className={styles.toggleLabel}>Remember me</span>
        </label>

        <Link to='/forgot-password' className={styles.linkBtn}>
          Forgot password?
        </Link>
      </div>

      <button className={`${styles.btnLogin} btn-contained`} type='submit'>
        Login
      </button>
    </form>
  );
}