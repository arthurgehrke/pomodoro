/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-pomodoro.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('@Pomodone:token');
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
