import React from 'react';
import Icon from '@/shared/icon';
import styles from './custom-appbar.module.css';

const AppBar = () => {
  return (
    <header className={styles.appbar}>
      <div className={styles.appbarLogo}>
        <Icon name='Layers' size='md' />
        <p className='header-sm text-color-grey-dark'>Electronics</p>
      </div>

      <nav className={styles.appbarNav}>
        <a href='#home'>Home</a>
        <a href='#parcel'>Your parcel</a>
        <a href='#contact'>Contact</a>
      </nav>

      <div className={styles.appbarActions}>
        <button>Login</button>
      </div>
    </header>
  );
};

export default AppBar;
