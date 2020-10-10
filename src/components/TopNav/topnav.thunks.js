import authApi from './../../apis/authApi';
import * as actions from './../../app/app.actions';

export const getCurrentUser = () => async (dispatch) => {
  try {
    let user = await authApi.getCurrentUserInfo();
    if (user) {
      let { item } = user;
      return dispatch(
        actions.getCurrentUser({
          isAuthenticated: true,
          user: {
            id: item.id,
            username: item.username || 'admin',
            photoUrl: item.photoUrl || '',
            roles: item.roles, // ['GUEST', 'USER', 'ADMIN']
          },
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};
