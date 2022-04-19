import axios from 'axios';
import CodeStatus from '../utils/codeStatus';
import { RootState } from '../store/store';
import { logOut } from '../store/authorization/reducers';

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

export const AxiosInterceptors = {
  setup: (store: any) => {
    instance.interceptors.request.use(
      (config) => {
        const state = <RootState>store?.getState();
        const accessToken = state ? state.authorizationSlice.user.token : null;

        if (!accessToken) {
          return config;
        }

        const headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        };

        return { ...config, headers };
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response) {
          if (error.response.status === 401) {
            if (store) {
              store.dispatch(logOut());
            }
          }
          throw error.response.data;
        }

        if (error.data) {
          throw error.data;
        }

        throw error;
      },
    );
  },
};

export interface SignIn {
  email: string,
  password: string,
  callBack?: Function,
}

export interface SignUp {
  email: string,
  username: string,
  password: string,
  callBack?: Function,
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
  upgrade?: boolean,
}

export interface Price {
  id: number,
  isActive: boolean,
  productId: number,
  price: string,
}

export interface Checkout {
  priceId: number,
  callBack?: Function,
}

export interface SubscribeProduct {
  id: number,
  userId: number,
  currentPeriodStart: number,
  currentPeriodEnd: number,
}

export interface Subscribe {
  id: number,
  userId: number,
  productId: number,
  currentPeriodStart: number,
  currentPeriodEnd: number,
  status: CodeStatus,
  product: Product,
  codes: Code[],
}

export interface Code {
  id: number,
  code: string,
  origin: string | null,
  status: CodeStatus,
  subscribeId: number,
  userId: number,
}

export interface ActivateCode {
  code: string,
  origin: string,
}

export interface UpgradSubscribe {
  productId: number,
  subscribeId: number,
  callBack?: Function,
}

export interface ManageCodes {
  codesIds: number[],
  subscribeId: number,
}

export default instance
