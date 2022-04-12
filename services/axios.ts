import axios from 'axios';

const baseURL = 'https://gscore-back.herokuapp.com/api/';
const instance = axios.create({ baseURL: baseURL });

export const setAccessToken = (accessToken: string) => {
  instance.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${accessToken}`
      return config;
    },
    error => {
      return Promise.reject(error)
    }
  )
}

export interface SignIn {
  email: string,
  password: string,
}

export interface SignUp {
  email: string,
  username: string,
  password: string,
}

export interface User {
  email?: string,
  username?: string,
  token: string,
}

export interface UserExport {
  user: {
    id: number;
    email: string;
    username: string;
  }
  token: string,
}

export default instance