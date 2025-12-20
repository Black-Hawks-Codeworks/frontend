import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={`${styles.navbarContainer} header-lg text-color-grey-dark`}>
      <div>Management Dashboard</div>
    </div>
  );
}
