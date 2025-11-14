import { authReducer } from './auth.reducer';
import { appReducer } from './app.reducer';

const rootReducerMapObject = {
  auth: authReducer,
  app: appReducer,
};

export default rootReducerMapObject;
