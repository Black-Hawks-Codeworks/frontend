import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import Icon from '@/shared/icon';

export default function Login({ onSubmit, isLoading, error, errorType }) {
  const [user, setUser] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('rememberedUser');
    const savedPass = localStorage.getItem('rememberedPass');

    if (savedUser) {
      setUser(savedUser);
      setRememberMe(true);
      if (savedPass) setPassword(savedPass);
    }
  }, []);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!isLoading) {
          onSubmit(user, password, rememberMe);
        }
      }}>
      <div className={styles.field}>
        <input
          id='username'
          name='username'
          autoComplete='username'
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
          autoComplete='current-password'
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
          <input
            type='checkbox'
            disabled={isLoading}
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span className={styles.track} aria-hidden='true' />
          <span className={styles.toggleLabel}>Remember me</span>
        </label>

        <Link to='/forgot-password' className={styles.linkBtn}>
          Forgot password?
        </Link>
      </div>
      <button className={`${styles.btnLogin} btn-contained`} type='submit' disabled={isLoading}>
        Login
      </button>
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
