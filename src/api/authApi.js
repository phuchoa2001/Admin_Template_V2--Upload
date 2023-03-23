import axiosClient from './axiosClient';

const authApi = {
  login(data) {
    return axiosClient.post('/login', data);
  },
  logout(data) {
    return axiosClient.post('/logout', data);
  },
  verifyToken(data) {
    return axiosClient.post('/protected', data);
  },
};

export default authApi;
