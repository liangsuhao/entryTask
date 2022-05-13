import axios from "axios";
import { getCookie } from './auth';

let baseUtl = "";

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

export default service;