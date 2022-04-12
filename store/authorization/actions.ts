import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { SignIn, SignUp, UserExport } from '../../services/axios';

export const fetchSignIn = createAsyncThunk(
  'authorizationSlice/fetchSignIn',
  async ({ email, password }: SignIn ) => {
    const response = await axios.post<UserExport>(`/users/sign-in`, { email, password })
    return response.data;
  }
);

export const fetchSignUp = createAsyncThunk(
  'authorizationSlice/fetchSignUp',
  async ( { email, username, password }: SignUp ) => {
    const response = await axios.post<UserExport>(`/users/sign-up`, { email, username, password })
    return response.data;
  }
);
