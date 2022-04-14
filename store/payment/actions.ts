import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Checkout, SubscribeProduct } from '../../services/axios';

export const fetchBuy = createAsyncThunk(
  'authorizationSlice/fetchBuy',
  async ({ priceId, callBack }: Checkout ) => {
    const response = await axios.post<SubscribeProduct>(`/payments/buy`, { priceId })
    return { subscribe: response.data, callBack };
  }
);
