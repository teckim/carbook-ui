import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reservationData from './reservationsApi';

const initialState = {
  status: null,
  myreservations: [],
  errors: [],
};

export const getMyRservationsAsync = createAsyncThunk(
  'myReservation/get',
  async () => {
    const myReservations = await reservationData.getAll();
    console.log(myReservations);
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
        console.log(action);
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
