import { RouterProvider } from 'react-router-dom';
import { createRouter } from '@/config/create-router';
import { Provider } from 'react-redux';
import { persistor, getStore } from '@/config/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={getStore()}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <RouterProvider router={createRouter()} />
      </PersistGate>
    </Provider>
  );
}

export default App;
