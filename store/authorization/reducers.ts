import { createEntityAdapter, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { setAccessToken, UserExport } from '../../services/axios';
import { fetchSignIn, fetchSignUp, fetchUpdatePassword, fetchUpdatePersonalData } from './actions';

type UserState = {
  user: UserExport | undefined
  loading: 'idle' | 'loading' | 'failed'
  error: SerializedError | undefined
  complete: string | undefined
}

const authorizationAdapter = createEntityAdapter<UserState>();

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: authorizationAdapter.getInitialState<UserState>({
    user: undefined,
    loading: 'idle',
    error: undefined,
    complete: undefined,
  }),
  reducers: {
    logOut: (state) => {
      state.user = undefined
      state.error = undefined
      setAccessToken('')
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
        state.user = action.payload.user
        setAccessToken(action.payload.user.token)
        action.payload.callBack()
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
        state.user = action.payload.user
        setAccessToken(action.payload.user.token)
        action.payload.callBack()
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
      .addCase(fetchUpdatePersonalData.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchUpdatePersonalData.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = undefined
        state.user.user = action.payload
        state.complete = 'Your date update successfuly'
      })
      .addCase(fetchUpdatePersonalData.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
      .addCase(fetchUpdatePassword.pending, (state) => {
        state.loading = 'loading'
        state.error = undefined
      })
      .addCase(fetchUpdatePassword.fulfilled, (state) => {
        state.loading = 'idle'
        state.error = undefined
        state.complete = 'Your date update successfuly'
      })
      .addCase(fetchUpdatePassword.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error
      })
  },
});

export const {
  logOut,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;
