import { useState } from 'react';
import './Login.module.css';
import Icon from '@/shared/icon';

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
        Username:
        <input
          type='text'
          className='user-field'
          placeholder='Please enter your username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label className='header-sm'>
        Password:
        <input
          type='password'
          className='password-field'
          placeholder='Please enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <Icon name='Eye' size='sm' />

      <button type='submit'> Login </button>
    </form>
  );
}
