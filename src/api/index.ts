import axios from 'axios';

const API_URL = 'https://auth-qa.qencode.com'; //TODO::MOVE TO ENV

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    //TODO:: add logic for refresh token

    if (
      error?.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        return api.request(originalRequest);
      } catch (error) {
        console.error('Authorize user');
      }
    }

    throw error;
  },
);

export default api;
