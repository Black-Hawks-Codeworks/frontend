import React from 'react';
import '../../styles/AppBar.css';
import Icon from '@/shared/icon';

const AppBar = () => {
  return (
    <header className='appbar'>
      <div className='appbar-logo actions'>
        <Icon name='Layers' size='md' />
        Electronics
      </div>

      <nav className='appbar-nav'>
        <a href='#home'>Home</a>
        <a href='#parcel'>Your parcel</a>
        <a href='#contact'>Contact</a>
      </nav>

      <div className='appbar-actions'>
        <button>Login</button>
      </div>
    </header>
  );
};

export default AppBar;
