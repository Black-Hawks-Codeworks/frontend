import { useState } from 'react';
import styles from './login.module.css';
import Icon from '@/shared/icon';

// 1. Added isLoading to props
export default function Login({ onSubmit, isLoading }) {
  const [user, setUser] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        // 2. Prevent function execution if already loading
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
          disabled={isLoading} /* 3. Disable input while loading */
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
          disabled={isLoading} /* 3. Disable input while loading */
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

      <button
        className={`${styles.btnLogin} btn-contained`}
        type='submit'
        disabled={isLoading} /* 4. Disable button to prevent double clicks */
      >
        {/* 5. Show Spinner or Text */}
        {isLoading ? <div className={styles.spinner}></div> : 'Login'}
      </button>
    </form>
  );
}
