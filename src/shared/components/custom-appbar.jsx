import React from 'react';
import Icon from '@/shared/icon';
import { useAppSelector, useAppDispatch } from '@/config/store';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from '@/config/reducers/auth.reducer';

import styles from './custom-appbar.module.css';

const AppBar = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const userRole = user?.role;
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

      {userRole === 'client' ? (
        <nav className={styles.appbarNav}>
          <Link to='/client-dashboard'>Dashboard</Link>
          <Link to='/create-repair-request'>Your parcel</Link>
          <Link to='/create-return-request'>Contact</Link>
          <Link to='/about'>About</Link>
        </nav>
      ) : null}
      {userRole === 'employee' ? (
        <nav className={styles.appbarNav}>
          <Link to='/employee-dashboard'>Dashboard</Link>
          <Link to='/about'>About</Link>
        </nav>
      ) : null}
      {userRole === 'technician' ? (
        <nav className={styles.appbarNav}>
          <Link to='/technician-dashboard'>Dashboard</Link>
          <Link to='/about'>About</Link>
        </nav>
      ) : null}
      {userRole === 'manager' ? (
        <nav className={styles.appbarNav}>
          <Link to='/manager-dashboard'>Dashboard</Link>
          <Link to='/about'>About</Link>
        </nav>
      ) : null}

      <div className={styles.appbarActions}>{user ? <button onClick={handleLogout}>Logout</button> : null}</div>
    </header>
  );
};

export default AppBar;
