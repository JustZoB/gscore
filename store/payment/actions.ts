import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Subscribe } from '../../services/axios';

export const fetchBuy = createAsyncThunk(
  'authorizationSlice/fetchBuy',
  async (priceId: number) => {
    const response = await axios.post<Subscribe>(`/payments/buy`, { priceId })
    return response.data;
  }
);
