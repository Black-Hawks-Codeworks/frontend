import { Outlet } from 'react-router-dom';
import AppBar from '@/shared/components/AppBar';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
