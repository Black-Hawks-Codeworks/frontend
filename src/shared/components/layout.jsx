import { Outlet } from 'react-router-dom';
import AppBar from '@/shared/components/custom-appbar';
import CustomFooter from '@/shared/components/custom-footer';
import QrCode from '@/shared/components/qr-code';

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
