import { Outlet } from 'react-router-dom';
import AppBar from '@/shared/components/AppBar';
import Footer from '@/shared/components/Footer';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}
