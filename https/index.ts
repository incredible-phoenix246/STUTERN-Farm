import axios from 'axios';

const AUTH_HTTP_URL = 'https://stutern-klusterthon.onrender.com/farmers';

const $http = axios.create({
  baseURL: AUTH_HTTP_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    credentials: 'true',
  },
});

export default $http;
