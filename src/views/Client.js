import axios from 'axios';

const Client = axios.create({
  baseURL: 'http://localhost:4000/accounts',
});

Client.interceptors.request.use(function (config) {
  const user = localStorage.getItem('token');
  if (!user) {
    config.headers.accessToken = null;
    config.headers.refreshToken = null;
    return config;
  }
  const { accessToken, refreshToken } = JSON.parse(user);
  config.headers.accessToken = accessToken;
  config.headers.refreshToken = refreshToken;
  return config;
});

Client.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      try {
        const originalRequest = error.config;
        const data = await Client.get('auth/refreshtoken');
        if (data) {
          const { accessToken, refreshToken } = data.data;
          localStorage.removeItem('token');
          localStorage.setItem(
            'token',
            JSON.stringify(data.data, ['accessToken', 'refreshToken'])
          );
          originalRequest.headers.accessToken = accessToken;
          originalRequest.headers.refreshToken = refreshToken;
          return await Client.request(originalRequest);
        }
      } catch (error) {
        localStorage.removeItem('token');
        console.log(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default Client;
