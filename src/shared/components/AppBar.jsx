import React from 'react';
import './AppBar.css';

const AppBar = () => {
  return (
    <header className='appbar'>
      <div className='appbar-logo'>Electronics</div>

      <nav className='appbar-nav'>
        <a href='#home'>Home</a>
        <a href='#features'>Your parcel</a>
        <a href='#pricing'>Contanct</a>
      </nav>

      <div className='appbar-actions'>
        <button>Login</button>
      </div>
    </header>
  );
};

export default AppBar;
