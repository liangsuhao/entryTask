/*
登录注册模块
*/

import axios from '../utils/request';
import qs from 'qs';

const baseUrl = "http://localhost:3004";
// const baseUrl = "";

const activityApi = {
  //按照条件拿所有的活动数据
  getAllActivity(params){
    return axios.post(baseUrl + '/activity/getAllActivity',qs.stringify(params));
  },
};

export default activityApi;