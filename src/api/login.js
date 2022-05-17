/*
登录注册模块
*/

import axios from '../utils/request';
import qs from 'qs';

const baseUrl = "http://localhost:3004";
// const baseUrl = "";

const signApi = {
  //登录
  loginin(params){
    return axios.post(baseUrl + '/login/loginin',qs.stringify(params));
  },
  //注册
  signup(params){
    return axios.post('/signup/',qs.stringify(params));
  },
  //登出
  signout(params){
    return axios.get('/signout/',{params: params});
  },
};

export default signApi;