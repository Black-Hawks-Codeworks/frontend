import { useState } from 'react';
import './Login.css';
import Icon from '@/shared/icon';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='header-xl'>
        Username:
        <input
          type='text'
          className='user-field'
          placeholder='Please enter your username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          className='password-field'
          placeholder='Please enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {/* etsi hrisimopoioume ta svgs pleon, san React components */}
      {/* pigenete sto /src/assets/icons/index.js gia deite pia name iparhon gia ta svgs */}
      <Icon name='Eye' size='sm' />
      <Icon name='User' size='md' />
      <Icon name='Lock' size='lg' />
      <Icon name='Home' size='xl' />
      <button type='submit'> Login </button>
    </form>
  );
}
