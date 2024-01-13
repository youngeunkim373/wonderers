import axios from 'axios';

const accessToken =
  localStorage.getItem('accessToken') && `Bearer ${localStorage.getItem('accessToken')}`;

export const api = axios.create({
  // baseURL: baseUrl,
  headers: {
    Authorization: accessToken,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
