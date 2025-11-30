import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containertop}>
        <div className={styles.loginContainer}>
          <h2 className='header-md'>Login </h2>
          <Login />
        </div>
        <div className={styles.textContainer}>
          <h1 className='header-lg'>Welcome</h1>
          <h2 className='header-md'>Returns and Repairs Management System</h2>
          <p className={`body-lg ${styles.horde}`}>Please connect to continue.</p>
        </div>
      </div>
      <div className={styles.containerbottom}>
        <div className={styles.text2Container}>
          <h2 className='header-md'>About Us</h2>
          <p className={`body-lg ${styles['card-elevation-4']}`}>
            Our Returns and Repairs Management System is designed to streamline the process of handling product returns
            and repairs, ensuring efficiency and customer satisfaction.
          </p>
        </div>
        <div>
          <h2 className='header-md'>Contact Us</h2>
          <p className={`body-lg ${styles['card-elevation-4']}`}>
            For support or inquiries, please reach out to our customer service team at{' '}
          </p>
          <h2 className='header-md'> About us</h2>
        </div>
      </div>
    </div>
  );
}
