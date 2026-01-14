import React from 'react';
import styles from './manager-page.module.css';
import Sidebar from './components/sidebar';
import HomeRightBar from './components/HomeRightBar/home-right-bar';

export default function ManagerPage() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <HomeRightBar />
      </div>
    </div>
  );
}
