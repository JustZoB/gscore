import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { ActivateCode, Code, Subscribe } from '../../services/axios';

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
