import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch, useSelector, useStore } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import rootReducerMapObject from './reducers';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

export const rootReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    ...rootReducerMapObject,
    auth: persistReducer(authPersistConfig, rootReducerMapObject.auth),
  })
);

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),

    preloadedState,
  });

export const store = setupStore();
export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const useAppStore = () => useStore();

export const getStore = () => store;
