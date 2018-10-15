import axios from 'axios';

axios.defaults.timeout = 5000;// 在超时前，所有请求都会等待 5 秒
axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头
axios.defaults.baseURL = 'http://*******';// 配置接口地址
axios.defaults.withCredentials = false;

Vue.prototype.$http = axios;