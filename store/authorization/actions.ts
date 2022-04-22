import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { SignIn, SignUp, UpdatePassword, UpdatePersonalData, User, UserExport } from '../../services/axios';

export const fetchSignIn = createAsyncThunk(
  'authorizationSlice/fetchSignIn',
  async ({ email, password, callBack }: SignIn ) => {
    const response = await axios.post<UserExport>(`/users/sign-in`, { email, password })
    return { user: response.data, callBack };
  }
);

export const fetchSignUp = createAsyncThunk(
  'authorizationSlice/fetchSignUp',
  async ( { email, username, password, callBack }: SignUp ) => {
    const response = await axios.post<UserExport>(`/users/sign-up`, { email, username, password })
    return { user: response.data, callBack };
  }
);

export const fetchUpdatePersonalData = createAsyncThunk(
  'authorizationSlice/fetchUpdatePersonalData',
  async ({ username, email }: UpdatePersonalData ) => {
    const response = await axios.patch<User>(`/users/`, { username, email })
    return response.data;
  }
);

export const fetchUpdatePassword = createAsyncThunk(
  'authorizationSlice/fetchUpdatePassword',
  async ({ currentPassword, newPassword }: UpdatePassword ) => {
    const response = await axios.patch<UserExport>(`/users/update-password`, { currentPassword, newPassword })
    return response.data;
  }
);
