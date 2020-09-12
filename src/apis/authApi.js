import axiosClient from './axiosClient';

const authApi = {
  signIn: (params) => {
    const url = '/auth/sign-in';
    return axiosClient.post(url, params);
  },
  getCurrentUser: () => {
    const url = '/users/current';
    return axiosClient.get(url);
  },
};

export default authApi;
