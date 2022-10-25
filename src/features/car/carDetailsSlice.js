import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCarDetails = createAsyncThunk(
  'carDetails/getCarDetails',
  async (id) => {
    // const res = await fetch('http://localhost:3000/v1/cars/');
    const res = await fetch(`http://localhost:3000/v1/cars/${id}`);
    const data = await res.json();
    return data;
  },
);

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState: [],

  extraReducers: {
    [getCarDetails.fulfilled]: (state, action) => action.payload,
  },
});

// export const { greeting } = carDetailsSlice.actions;

export default carDetailsSlice.reducer;
