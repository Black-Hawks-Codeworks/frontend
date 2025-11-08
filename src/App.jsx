import { RouterProvider } from 'react-router-dom';
import { createRouter } from '@/config/create-router';
import AppBar from './components/AppBar/AppBar';

function App() {
  <AppBar />;
  return (
    <>
      <AppBar />
      <RouterProvider router={createRouter()} />
    </>
  );
}

export default App;
