import * as types from './constants';

const initialState = {
  loading: false,
  mesg: '',
  user: {
    gender: '',
    introduction: '',
  },
};

export const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_REQUESTED:
    case types.EDIT_PROFILE_REQUESTED: {
      return { ...state, loading: true, mesg: '' };
    }
    case types.GET_PROFILE_SUCCESS: {
      let { user } = action.payload;
      return { ...state, loading: false, mesg: '', user };
    }
    case types.EDIT_PROFILE_SUCCESS: {
      let { user } = action.payload;
      return { ...state, loading: false, mesg: '', user };
    }
    case types.GET_PROFILE_FAILED:
    case types.EDIT_PROFILE_FAILED: {
      let { mesg } = action.payload;
      return { ...state, loading: false, mesg };
    }
    default: {
      return { ...state };
    }
  }
};
