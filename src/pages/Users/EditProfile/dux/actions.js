import * as types from './constants';

export const getUserProfileRequested = () => ({
  type: types.GET_PROFILE_REQUESTED,
});

export const getUserProfileSuccess = (payload) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload,
});

export const getUserProfileFailed = (payload) => ({
  type: types.GET_PROFILE_FAILED,
  payload,
});

export const editProfileRequested = () => ({
  type: types.EDIT_PROFILE_REQUESTED,
});

export const editProfileSuccess = (payload) => ({
  type: types.EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFailed = (payload) => ({
  type: types.EDIT_PROFILE_FAILED,
  payload,
});
