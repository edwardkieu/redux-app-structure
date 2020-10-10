import axiosClient from './axiosClient';

const authApi = {
  login: (params) => {
    const url = '/account/login';
    return axiosClient.post(url, params);
  },
  getCurrentUserInfo: () => {
    const url = '/users/current-user-info';
    return axiosClient.get(url);
  },
};

export default authApi;
