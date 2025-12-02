import React from 'react';
import Icon from '@/shared/icon';
import styles from './custom-appbar.module.css';
import { useAppSelector, useAppDispatch } from '@/config/store';
import { useNavigate } from 'react-router-dom';
import { setUser } from '@/config/reducers/auth.reducer';

const AppBar = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(setUser(null));
    navigate('/');
  }

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

      <div className={styles.appbarActions}>{user ? <button onClick={handleLogout}>Logout</button> : null}</div>
    </header>
  );
};

export default AppBar;
