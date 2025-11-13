import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-copyright1'>&#169; Electronics.com</div>

      <nav className='footer-nav'>
        <a href='help'>Help</a>
        <a href='policy'>Policy</a>
        <a href='aboutus'>About Us</a>
        <a href='donate'>Buy us a coffee</a>
        <a href='donate'>Donate a finger</a>
      </nav>

      <div className='footer-copyright2'>All rights reserved (2025)</div>
    </footer>
  );
};

export default Footer;
