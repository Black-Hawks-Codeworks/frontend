import styles from './page.module.css';
import Login from '@/modules/landing/components/login';
import Icon from '@/shared/icon';
import { setUser } from '@/config/reducers/auth.reducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, getStore } from '@/config/store';

export default function LandingPage() {
  const navigate = useNavigate();
  //to dispatch kai to useAppSelector einai oi sinartiseis pou allazoume kai pernoume to store
  //to store einai to global state tou app, perissotera @/config/store.js
  //i logiki auti tha metaferthei sto backend kapoia stigmi edo tha ehoume user h null
  const dispatch = useAppDispatch();
  const technicians = useAppSelector((state) => state.auth?.technicians);
  const managers = useAppSelector((state) => state.auth?.managers);
  const clients = useAppSelector((state) => state.auth?.clients);
  const employees = useAppSelector((state) => state.auth?.employees);

  const possibleUsers = [...technicians, ...managers, ...clients, ...employees];
  console.log(possibleUsers);
  //mehri edo, backend

  //edo an iparhei user feugoume apo to landing page se to dashboard pou antistoixei ston role tou user
  const currentUser = getStore().getState().auth.user;
  if (currentUser) {
    const currentUserRole = currentUser.role;
    return <Navigate to={`/${currentUserRole}-dashboard`} />;
  }

  //pernoume ton user apo to backend me async function
  //to route prepei na eina lathos
  //gia na doulepsei prepei na trehei to backend
  async function authUserAsync(username, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setUser(data));
        const userRole = data.role;
        navigate(`/${userRole}-dashboard`);
      } else {
        dispatch(setUser(null));
      }
    } catch (error) {
      dispatch(setUser(null));
      console.error('Error:', error);
    }
  }

  console.log(authUserAsync);
  return (
    <div className={styles.container}>
      <div className={styles.containertop}>
        <div className={styles.loginContainer}>
          <h2 className='header-md'>Login</h2>
          <Login onSubmit={authUserAsync} />
        </div>
        <div className={styles.textContainer}>
          <Icon name='Layers' size='xl' />
          <h1 className='header-lg'>Welcome!</h1>
          <h2 className='header-md'>Electronics</h2>
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
