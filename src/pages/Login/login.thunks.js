import authApi from './../../apis/authApi';
import * as actions from './login.actions';

export const login = (payload) => async (dispatch) => {
  dispatch(actions.loginRequested());
  try {
    let res = await authApi.login(payload);
    const { success, message, token } = res;
    if (success || token) {
      localStorage.setItem('jwt', res.token);
      let user = await authApi.getCurrentUserInfo();
      let item = { user };
      return dispatch(
        actions.loginSuccess({
          ...res,
          user: {
            id: item.id,
            username: item.username || 'admin',
            photoUrl: item.photoUrl || '',
            roles: item.roles, // ['GUEST', 'USER', 'ADMIN']
          },
        })
      );
    } else {
      return dispatch(actions.loginFailed({mesg: message}));
    }
  } catch (err) {
    return dispatch(actions.loginFailed(err));
  }
};
