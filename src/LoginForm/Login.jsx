import React from 'react';
import { useState } from 'react';
import './Login.css';
export default function Login(){

    const [user, setUser] = useState('');
    const [password,setPassword] =useState('');
    
    return (
      <form >
        <input type='text' 
        className='user-field'
        placeholder="Please enter your username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        />

        <input type='password' 
        className='password-field'
        placeholder="Please enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit"> Login </button>
      </form>
    );
    
}
