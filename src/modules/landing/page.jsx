import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';
import Icon from '@/shared/icon';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containertop}>
        <div className={styles.loginContainer}>
          <h2 className='header-md'>Login </h2>
          <Login />
        </div>
        <div className={styles.textContainer}>
          <Icon name='Layers' size='xl' />
          <h1 className='header-lg'>Welcome!</h1>
          <h2 className='header-md'> Electronics </h2>
          <h2 className='header-md'>Returns and Repairs Management System</h2>
          <p className={`body-lg ${styles.horde}`}>Please connect to submit or track your requests.</p>
        </div>
      </div>
      <div className={styles.containerbottom}>
        <div className={styles.text2Container}>
          <h2 className='header-xl'>5</h2>
          <p className='body-xl'> Physical Stores across Greece</p>
        </div>
        <div className={styles.text2Container}>
          <h2 className='header-xl'> 20000+</h2>
          <p className='body-xl'>Unique product codes for electronic items.</p>
        </div>
        <div className={styles.text2Container}>
          <h2 className='header-xl'>15+</h2>
          <p className='body-xl'>Years of presence.</p>
        </div>
      </div>
    </div>
  );
}
