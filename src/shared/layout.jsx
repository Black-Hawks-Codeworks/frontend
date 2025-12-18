import { Outlet } from 'react-router-dom';
import AppBar from '@/shared/custom-appbar';
import CustomFooter from '@/shared/custom-footer';
import QrCode from '@/shared/qr-code';

import styles from './layout.module.css';
export default function Layout() {
  return (
    <main className={styles.layout}>
      <AppBar />
      <Outlet />
      <CustomFooter />
      <QrCode />
    </main>
  );
}
