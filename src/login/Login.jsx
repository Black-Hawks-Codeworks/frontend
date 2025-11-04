import React from 'react';
import { useState } from 'react';
import './Login.css';

export default function Login(){

    const [user, setUser] = useState('');
    const [password,setPassword] =useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        console.log(password);
      };


    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' 
          className='user-field'
          placeholder="Please enter your username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          Password:
        <input type='password' 
        className='password-field'
        placeholder="Please enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </label>

        <button type="submit"> Login </button>
      </form>
    );
    
    
}
