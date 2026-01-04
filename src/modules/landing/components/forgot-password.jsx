import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './forgot-password.module.css';
import Icon from '@/shared/icon';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    setTimeout(() => {
      setMessage('Reset link sent! Redirecting to login...');
      setIsLoading(false);

      setTimeout(() => {
        navigate('/'); // backto login
      }, 3500);
    }, 2500);
  };

  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation-5`}>
        {/* form*/}
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className='header-xl'>Reset Password</h2>
            <p className='body-lg'>Enter your email to receive a password reset link.</p>

            {message && <div className={styles.successBadge}>{message}</div>}

            <div className={styles.field}>
              <input
                id='email'
                type='email'
                className={styles.input}
                placeholder=' '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading || !!message}
              />
              <label className={styles.label} htmlFor='email'>
                Email Address
              </label>
            </div>

            <button className='btn-contained' type='submit' disabled={isLoading || message}>
              {isLoading ? 'Sending...' : 'Send Link'}
            </button>

            <div className={styles.backToLogin}>
              <Link to='/' className={styles.link}>
                <Icon name='ArrowLeft' size='sm' className={styles.backIcon} />
                <span>Back to Login</span>
              </Link>
            </div>
          </form>
        </div>

        {/* InfoBox */}
        <div className={styles.infoBox}>
          <p className='header-md'>Security Steps</p>
          <ul className='body-xl'>
            <li>
              <Icon name='Message' size='md' />
              <span>
                <b>Enter</b> your registered email address.
              </span>
            </li>
            <li>
              <Icon name='ShieldCheck' size='md' />
              <span>
                <b>Check</b> your inbox for a secure reset link.
              </span>
            </li>
            <li>
              <Icon name='Edit2' size='md' />
              <span>
                <b>Create</b> a new strong password.
              </span>
            </li>
            <li>
              <Icon name='Lock' size='md' />
              <span>
                <b>Login</b> again with your new credentials.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
