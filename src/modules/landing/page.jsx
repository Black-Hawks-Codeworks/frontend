import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';
import { setUser } from '@/config/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/config/store';

export default function LandingPage() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const technicians = useAppSelector((state) => state.auth?.technicians);
  const managers = useAppSelector((state) => state.auth?.managers);
  const clients = useAppSelector((state) => state.auth?.clients);
  const employees = useAppSelector((state) => state.auth?.employees);

  console.log(technicians, managers, clients, employees);
  if (!technicians || !managers || !clients || !employees) {
    return <div>Loading...</div>;
  }
  const possibleUsers = [...technicians, ...managers, ...clients, ...employees];

  function authUser(username, password) {
    const user = possibleUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch(setUser(user));
      navigate('/client-dashboard');
    } else {
      dispatch(setUser(null));
      navigate('/');
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
