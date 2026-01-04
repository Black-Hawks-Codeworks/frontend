import { useState } from 'react';
import styles from './login.module.css';
import Icon from '@/shared/icon';

// 1. Accept 'error' prop
export default function Login({ onSubmit, isLoading, error, errorType }) {
  const [user, setUser] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!isLoading) {
          onSubmit(user, password);
        }
      }}>
      <div className={styles.field}>
        <input
          id='username'
          className={`${styles['form-input']} ${styles['form-input--user']}`}
          placeholder=' '
          value={user}
          disabled={isLoading}
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
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className={`${styles.label} ${styles.floatingLabel}`} htmlFor='password'>
          Password
        </label>

        <button
          type='button'
          className={styles.showPasswordButton}
          disabled={isLoading}
          onClick={() => setIsPasswordVisible((v) => !v)}
          aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}>
          <Icon name={isPasswordVisible ? 'Hide' : 'Eye'} size='md' />
        </button>
      </div>

      <div className={styles.actionsRow}>
        <label className={styles.toggle}>
          <input type='checkbox' disabled={isLoading} />
          <span className={styles.track} aria-hidden='true' />
          <span className={styles.toggleLabel}>Remember me</span>
        </label>

        <button type='button' className={styles.linkBtn} disabled={isLoading}>
          Forgot password?
        </button>
      </div>

      <button className={`${styles.btnLogin} btn-contained`} type='submit' disabled={isLoading}>
        {isLoading ? <div className={styles.spinner}></div> : 'Login'}
      </button>
      {/* 2. Show the error message if it exists */}
      {/* {error && <div className={styles.errorMessage}>{error}</div>} */}
      {/* <div className={styles.errorMessage}>{error || ''}</div> */}
      <div
        className={
          styles.errorMessage +
          (errorType === 'required' ? ' ' + styles.errorRequired : '') +
          (errorType === 'login' ? ' ' + styles.errorLogin : '') +
          (errorType === 'server' ? ' ' + styles.errorServer : '')
        }>
        {error || ''}
      </div>
    </form>
  );
}
