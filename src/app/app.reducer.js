import * as types from './app.constants';
import { LOGIN_SUCCESS } from './../pages/Login/login.constants';
const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    username: '',
    photoUrl: '',
    roles: [], // ['GUEST', 'USER', 'ADMIN']
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_OUT: {
      localStorage.removeItem('jwt');
      return { ...state, isAuthenticated: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }
    case types.GET_CURRENT_USER: {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
