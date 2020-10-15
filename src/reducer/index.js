import { combineReducers } from 'redux';

import appReducer from './../app/app.reducer';
import { loginReducer } from './../pages/Login/login.reducer';
import { editProfileReducer } from './../pages/Users/EditProfile/dux/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  editProfile: editProfileReducer,
});

export default rootReducer;
