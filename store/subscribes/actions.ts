import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Subscribe } from '../../services/axios';

export const fetchGetSubscribes = createAsyncThunk(
  'authorizationSlice/fetchGetSubscribes',
  async () => {
    const response = await axios.get<Subscribe[]>(`/subscribe/self`)
    return { subscribes: response.data };
  }
);
