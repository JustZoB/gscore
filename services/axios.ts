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

export interface UpdatePersonalData {
  username: string,
  email: string,
}

export interface UpdatePassword {
  currentPassword: string,
  newPassword: string,
}

export interface User {
  id: number,
  email: string,
  username: string,
}

export interface UserExport {
  user: User,
  token: string,
}

export interface Product {
  id: number,
  sitesCount: number,
  name: string,
  prices: Price[],
}

export interface Price {
  id: number,
  isActive: boolean,
  productId: number,
  price: string,
}

export default instance
