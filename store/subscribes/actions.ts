import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { ActivateCode, Code, ManageCodes, Subscribe, SubscribeProduct, UpgradSubscribe } from '../../services/axios';

export const fetchGetSubscribes = createAsyncThunk(
  'subscribesSlice/fetchGetSubscribes',
  async () => {
    const response = await axios.get<Subscribe[]>(`/subscribe/self`)
    return { subscribes: response.data };
  }
);

export const fetchActiveCode = createAsyncThunk(
  'subscribesSlice/fetchActiveCode',
  async ( { origin, code }: ActivateCode ) => {
    const headers = { 'Origin': origin };
    const response = await axios.post<Code>(`/code/activate`, { origin, code }, { headers });
    return { code: response.data };
  }
);

export const fetchUpgradeSubscribe = createAsyncThunk(
  'subscribesSlice/fetchUpgradeSubscribe',
  async ( { productId, subscribeId, callBack }: UpgradSubscribe ) => {
    const response = await axios.post<SubscribeProduct>(`/subscribe/change-product`, { productId, subscribeId });
    return { subscribe: response.data, callBack };
  }
);

export const fetchManageHoldingCodes = createAsyncThunk(
  'subscribesSlice/fetchManageHoldingCodes',
  async ( { codesIds, subscribeId }: ManageCodes ) => {
    const response = await axios.put<Code[]>(`/code/manage`, { codesIds, subscribeId });
    return { codes: response.data };
  }
);
