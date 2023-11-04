import axios from 'axios';

const accessToken =
  sessionStorage.getItem('accessToken') && `Bearer ${sessionStorage.getItem('accessToken')}`;

export const api = axios.create({
  // baseURL: baseUrl,
  headers: {
    Authorization: accessToken,
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
