import * as types from './app.constants';

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const getCurrentUser = (payload) => ({
  type: types.GET_CURRENT_USER,
  payload,
});
