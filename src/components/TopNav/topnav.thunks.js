import authApi from './../../apis/authApi';
import * as actions from './../../app/app.actions';

export const getCurrentUser = () => async (dispatch) => {
  try {
    let user = await authApi.getCurrentUser();
    if (user) {
      return dispatch(
        actions.getCurrentUser({
          isAuthenticated: true,
          user: {
            id: user.id,
            fullName: user.fullName || 'Edward',
            email: user.email || 'kieuminhhien@gmail.com',
            avatar:
              user.imageProfile ||
              'https://source.unsplash.com/QAB-WJcbgJk/60x60',
            roles: user.roles, // ['GUEST', 'USER', 'ADMIN']
          },
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};
