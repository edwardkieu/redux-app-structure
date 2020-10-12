import * as types from './login.constants';

const initialState = {
  loading: false,
  mesg: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUESTED: {
      return { ...state, loading: true, mesg: '' };
    }
    case types.LOGIN_SUCCESS:{
        return { ...state, loading: false, mesg: '' };
    }
    case types.LOGIN_FAILED: {
      return { ...state, loading: false, mesg: action.payload.mesg };
    }
    default: {
      return {...state};
    }
  }
};
