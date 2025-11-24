import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';

import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

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

        {/* --- TLDRAW CANVAS --- */}
        <div style={{ width: '100%', height: '500px', marginTop: '2rem' }}>
          <Tldraw />
        </div>
      </div>
    </div>
  );
}
