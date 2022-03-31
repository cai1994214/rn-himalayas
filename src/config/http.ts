import axios from 'axios';
import Config from 'react-native-config';
//基本路径
axios.defaults.baseURL = Config.API_URL;
//请求拦截器
axios.interceptors.request.use(
  function (config) {
    // console.log('请求拦截器', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
//响应拦截器
axios.interceptors.response.use(
  function (response) {
    // console.log('响应数据response', response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
