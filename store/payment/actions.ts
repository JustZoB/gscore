import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Checkout, Subscribe } from '../../services/axios';

export const fetchBuy = createAsyncThunk(
  'authorizationSlice/fetchBuy',
  async ({ priceId, callBack }: Checkout ) => {
    const response = await axios.post<Subscribe>(`/payments/buy`, { priceId })
    return { subscribe: response.data, callBack };
  }
);
