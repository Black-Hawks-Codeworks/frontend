import React from 'react';
import styles from './custom-footer.module.css';
const CustomFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright1}>&#169; Electronics.com</div>

      <nav className={styles.footerNav}>
        <a href='help'>Help</a>
        <a href='donate'>Buy us a coffee</a>
        <a href='donate'>Donate a finger</a>
      </nav>

      <div className={styles.footerCopyright2}>All rights reserved (2025)</div>
    </footer>
  );
};

export default CustomFooter;
