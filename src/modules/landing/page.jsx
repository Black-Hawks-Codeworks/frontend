import styles from './page.module.css';
import Login from '@/modules/landing/components/login';
import Icon from '@/shared/icon';
import useLanding from '@/modules/landing/hooks/use-landing';
import { getStore } from '@/config/store';
import { Navigate } from 'react-router-dom';

export default function LandingPage() {
  // 1. Extract isLoading from the hook
  const { authUser, isLoading } = useLanding();

  // Check if user is already logged in
  const currentUser = getStore().getState().auth.user;
  if (currentUser) {
    const currentUserRole = currentUser.role;
    return <Navigate to={`/${currentUserRole}-dashboard`} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.containertop}>
        <div className={styles.loginContainer}>
          <h2 className='header-md'>Login</h2>
          {/* 2. Pass isLoading to the Login component */}
          <Login onSubmit={authUser} isLoading={isLoading} />
        </div>
        <div className={`${styles.textContainer} ${styles.enter}`}>
          <h1 className='header-lg'>Welcome!</h1>

          <h2 className={`${styles.title} header-md`}>
            <Icon name='Layers' size='xl' />
            Electronics
          </h2>
          <h2 className='header-md'>Returns and Repairs Management System</h2>
          <p className={`body-lg ${styles.horde}`}>Please connect to submit or track your requests.</p>
        </div>
      </div>
      <div className={styles.containerbottom}>
        <div className={styles.statCard}>
          <h2 className='header-xl'>5</h2>
          <p className='body-xl'>Physical Stores across Greece</p>
        </div>

        <div className={styles.statCard}>
          <h2 className='header-xl'>20000+</h2>
          <p className='body-xl'>Unique product codes for electronic items.</p>
        </div>

        <div className={styles.statCard}>
          <h2 className='header-xl'>15+</h2>
          <p className='body-xl'>Years of presence.</p>
        </div>
      </div>
    </div>
  );
}
