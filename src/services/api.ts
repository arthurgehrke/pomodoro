import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-pomodoro.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
