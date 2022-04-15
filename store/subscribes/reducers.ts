import { createEntityAdapter, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Subscribe } from '../../services/axios';
import { fetchGetSubscribes } from './actions';

type SubscribesState = {
  subscribes: Subscribe[] | undefined
  paginationActiveElement: number
  paginationLength: number
  loading: 'idle' | 'loading' | 'failed'
  error: SerializedError | undefined
}

const subscribesAdapter = createEntityAdapter<SubscribesState>();

const subscribesSlice = createSlice({
  name: 'subscribesSlice',
  initialState: subscribesAdapter.getInitialState<SubscribesState>({
    subscribes: undefined,
    paginationActiveElement: 1,
    paginationLength: 1,
    loading: 'idle',
    error: undefined,
  }),
  reducers: {
    paginationNext: (state) => {
      if (state.paginationActiveElement !== state.paginationLength) {
        state.paginationActiveElement++
      }
    },
    paginationPrev: (state) => {
      if (state.paginationActiveElement !== 1) {
        state.paginationActiveElement--
      }
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchGetSubscribes.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchGetSubscribes.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.subscribes = action.payload.subscribes
        state.paginationLength = action.payload.subscribes.length
      })
      .addCase(fetchGetSubscribes.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
  },
});

export const {
  paginationNext,
  paginationPrev,
} = subscribesSlice.actions;

export default subscribesSlice.reducer;
