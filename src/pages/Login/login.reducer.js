import * as types from './login.constants';

const initialState = {
  loading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUESTED: {
      return { ...state, loading: true };
    }
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FAILED: {
      return { ...state, loading: false };
    }
    default: {
      return {...state};
    }
  }
};
