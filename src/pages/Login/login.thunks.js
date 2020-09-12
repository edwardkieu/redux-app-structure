import authApi from './../../apis/authApi';
import * as actions from './login.actions';

export const login = (payload) => async (dispatch) => {
  dispatch(actions.loginRequested());
  try {
    let res = await authApi.signIn(payload);
    localStorage.setItem('jwt', res.token);
    let user = await authApi.getCurrentUser();
    return dispatch(
      actions.loginSuccess({
        ...res,
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          avatar: user.imageProfile,
          roles: user.roles, // ['GUEST', 'USER', 'ADMIN']
        },
      })
    );
  } catch (err) {
    return dispatch(actions.loginFailed(err));
  }
};
