import { createEntityAdapter, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { User, UserExport } from '../../services/axios';
import { fetchSignIn, fetchSignUp } from './actions';

type UserState = {
  nav: 'signup' | 'signin' | 'checkout'
  user: UserExport | undefined
  loading: 'idle' | 'loading' | 'failed'
  error: SerializedError | undefined
}

const authorizationAdapter = createEntityAdapter<UserState>();

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: authorizationAdapter.getInitialState<UserState>({ nav: 'signup', user: undefined, loading: 'idle', error: undefined, }),
  reducers: {
    setNav: (state, action: PayloadAction<'signup' | 'signin' | 'checkout'>) => {
      state.nav = action.payload
      state.error = undefined
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.nav = 'checkout'
        state.user = { ...state, ...action.payload}
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
      .addCase(fetchSignUp.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.nav = 'checkout'
        state.user = { ...state, ...action.payload}
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
  },
});

export const {
  setNav,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
