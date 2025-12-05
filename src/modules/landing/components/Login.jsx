import { useState } from 'react';
import styles from './Login.module.css';

export default function Login({ onSubmit }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(user, password);
      }}>
      <label className='header-sm'>
        Username
        <input
          type='text'
          className={`${styles['form-input']} ${styles['form-input--user']}`}
          placeholder='Please enter your username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label className='header-sm'>
        Password
        <input
          type='password'
          className={`${styles['form-input']} ${styles['form-input--password']}`}
          placeholder='Please enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='btn-contained' type='submit'>
        {' '}
        Login{' '}
      </button>
    </form>
  );
}
