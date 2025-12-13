import React from 'react';
import styles from './custom-footer.module.css';
const CustomFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopyright1}>&#169; Electronics.com</div>

      <nav className={styles.footerNav}>
        <a href='https://github.com/Black-Hawks-Codeworks' target='_blank' rel='noreferrer'>
          Github
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
          LinkedIn
        </a>
        <a href='https://www.athenspesta.gr/' target='_blank' rel='noreferrer'>
          Donate a finger
        </a>
      </nav>

      <div className={styles.footerCopyright2}>All rights reserved (2025)</div>
    </footer>
  );
};

export default CustomFooter;
