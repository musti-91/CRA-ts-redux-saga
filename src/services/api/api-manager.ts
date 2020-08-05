import config from 'config';
import humps from 'humps';
import axios from 'axios';

import storeConfig from 'store';
import { resetStore } from 'store/system/system.actions';
import { getAccessToken } from 'store/auth/auth.selectors';

const axiosApi = axios.create({
  baseURL: config.API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  transformRequest: [
    data => {
      // convert all body keys to snake_case
      let output = humps.decamelizeKeys(data);

      // convert all body objects to strings
      if (typeof output === 'object') {
        output = JSON.stringify(output);
      }

      return output;
    },
  ],
  transformResponse: [
    data =>
      // convert all body keys to snake_case
      humps.camelizeKeys(JSON.parse(data)),
  ],
});

axiosApi.interceptors.request.use(
  config => {
    // set Bearer if authenticated
    const state = storeConfig.store.getState();
    // @ts-ignore
    const accessToken = getAccessToken(state);

    // Set accessToken if authenticated
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  error => Promise.reject(error),
);

axiosApi.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      storeConfig.store.dispatch(resetStore());
      window.location.assign(config.API_BASE);
    }

    return Promise.reject(error);
  },
);

export default axiosApi;
