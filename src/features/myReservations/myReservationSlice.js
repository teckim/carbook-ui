import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reservationData from './reservationsApi';

const initialState = {
  status: null,
  myReservations: [],
  errors: [],
};

export const getMyRservationsAsync = createAsyncThunk(
  'myReservation/get',
  async () => {
    const { data } = await reservationData.getAll();
    return data;
  },
);

export const createReservationAsync = createAsyncThunk(
  'myReservation/create',
  async (data) => {
    await reservationData.create(data);
  },
);

export const cancelReservationAsync = createAsyncThunk(
  'myReservation/cancel',
  async (id) => {
    await reservationData.cancel(id);
  },
);

export const myReservationsSlice = createSlice({
  name: 'myReservations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMyRservationsAsync.pending, (state) => {
        state.status = 'loading';
        state.errors = [];
      })
      .addCase(getMyRservationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errors = [];
        state.myReservations = action.payload;
      })
      .addCase(getMyRservationsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errors.push(action.payload.error);
      });
  },
});

// export const selectUser = (state) => state.auth.user;
// export const selectAuthToken = (state) => state.auth.jwt;
// export const selectErrors = (state) => state.auth.errors;
// export const selectIsLoggedIn = (state) => !!state.auth.jwt;

export default myReservationsSlice.reducer;
