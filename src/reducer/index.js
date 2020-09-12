import { combineReducers } from 'redux';

import appReducer from './../app/app.reducer';
import { loginReducer } from './../pages/Login/login.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer
});

export default rootReducer;
