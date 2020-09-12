import * as types from './app.constants';
import { LOGIN_SUCCESS } from './../pages/Login/login.constants'
const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    fullName: '',
    email: '',
    avatar: '',
    roles: [], // ['GUEST', 'USER', 'ADMIN']
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT: {
      localStorage.removeItem('jwt');
      return { ...state, isAuthenticated: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isAuthenticated: true, user: action.payload.user };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
