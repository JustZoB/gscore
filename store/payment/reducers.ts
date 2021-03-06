import { createEntityAdapter, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Price, SubscribeProduct } from '../../services/axios';
import { fetchBuy } from './actions';

type PaymentState = {
  sitesCount: number | undefined
  price: Price | undefined
  subscribe: SubscribeProduct | undefined
  loading: 'idle' | 'loading' | 'failed'
  error: SerializedError | undefined
}

const paymentAdapter = createEntityAdapter<PaymentState>();

const paymentSlice = createSlice({
  name: 'paymentSlice',
  initialState: paymentAdapter.getInitialState<PaymentState>({
    sitesCount: undefined,
    price: undefined,
    subscribe: undefined,
    loading: 'idle',
    error: undefined,
  }),
  reducers: {
    setPayment: (state, action: PayloadAction<{ sitesCount: number, price: Price }>) => {
      state.sitesCount = action.payload.sitesCount
      state.price = action.payload.price
    },
    clearSubscribe: (state) => {
      state.subscribe = undefined
      state.error = undefined
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchBuy.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchBuy.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.subscribe = action.payload.subscribe
        action.payload.callBack()
      })
      .addCase(fetchBuy.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
  },
});

export const {
  setPayment,
  clearSubscribe,
} = paymentSlice.actions;

export default paymentSlice.reducer;
