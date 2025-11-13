import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Login />
      </div>
      <div className={styles.textContainer}>
        <p>nai geia sas</p>
        <p className={`body-lg ${styles.danis}`}>ti kanete</p>
      </div>
    </div>
  );
}
