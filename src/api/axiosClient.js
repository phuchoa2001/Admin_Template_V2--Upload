import axios from 'axios';
import queryString from 'query-string';

import { doLogout } from '../redux/authSlice';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  paramsSerializer: (params) =>
    queryString.stringify(params, {
      skipNull: true,
      skipEmptyString: true,
    }),
});

const httpService = {
  setupInterceptors: (store) => {
    axiosClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");

        if (token) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    axiosClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {

        if (error.response) {
          const { config, status } = error.response;
          const URLs = ['/verifyToken'];

          if (
            !URLs.includes(config.url) &&
            (status === 401 || status === 403)
          ) {
            store.dispatch(doLogout());
          }
          return { data: error.response }
        }

        return Promise.reject(error.response);
      },
    );
  },
};

export default axiosClient;
export { httpService };
