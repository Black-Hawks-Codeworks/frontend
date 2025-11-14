import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <Login />
      </div>
      <div className={styles.textContainer}>
        <h1 className='header-lg'>Welcome to the Blackhawks Frontend!</h1>
        <p>ΕΤΟΙΜΟΙ ΓΙΑ CAPSTONE PROJECT!!!</p>
        <p>nai geia sas</p>
        <p className={`body-lg ${styles.horde}`}>ti kanete</p>
      </div>
    </div>
  );
}
