import authApi from './../../../../apis/authApi';
import * as actions from './actions';

export const getUserProfile = () => async (dispatch) => {
  dispatch(actions.getUserProfileRequested());
  try {
    let user = await authApi.getCurrentUserInfo();
    let { item } = user;
    return dispatch(
      actions.getUserProfileSuccess({
        user: {
          id: item.id,
          gender: item.gender,
          introduction: item.introduction,
        },
      })
    );
  } catch (err) {
    return dispatch(
      actions.getUserProfileFailed(
        err || 'Has an error while loading user profile.'
      )
    );
  }
};
