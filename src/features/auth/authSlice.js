import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, register } from './authAPI';
import http from '../../modules/http';

const initialState = {
  status: null,
  jwt: null,
  user: null,
  errors: [],
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credencials, thunkApi) => {
    try {
      const response = await login(credencials);
      const { user } = response.data;
      const jwt = response.data.token;

      if (user && jwt) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('jwt', jwt);
        http.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      return {
        user,
        jwt,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data || error);
    }
  },
);

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const response = await register(user);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data || error);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errors = [];
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errors.push(action.payload.error);
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errors = [];
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errors = action.payload.errors.length
          ? [...action.payload.errors]
          : action.payload.errors;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.jwt;
export const selectErrors = (state) => state.auth.errors;
export const selectIsLoggedIn = (state) => !!state.auth.jwt;

export default authSlice.reducer;
