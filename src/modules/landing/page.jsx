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

  const possibleUsers = [...technicians, ...managers, ...clients, ...employees];
  console.log(possibleUsers);

  function authUser(username, password) {
    const user = possibleUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      dispatch(setUser(user));

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
