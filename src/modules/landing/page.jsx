import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';
import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate, Navigate } from 'react-router-dom';
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
    const userRole = currentUser.role;
    return <Navigate to={`/${userRole}-dashboard`} />;
  }
  //auti i sinartisi trehei otan patame to login
  function authUser(username, password) {
    //i kato grammi tha antikatastathei apo ena api call....
    const user = possibleUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch(setUser(user));
      //analoga ton user kane redirect
      const userRole = user.role;
      switch (userRole) {
        case 'client':
          navigate('/client-dashboard');
          break;
        case 'technician':
          navigate('/technician-dashboard');
          break;
        case 'manager':
          navigate('/manager-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      dispatch(setUser(null));
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <Login onSubmit={authUser} />
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
