import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CarData from './carData';

export const retrieveCars = createAsyncThunk('cars/retrieve', async () => {
  const res = await CarData.getAll();
  console.log(res.data);
  return res.data;
});

export const retrieveCar = createAsyncThunk('car/retrieve', async (id) => {
  const res = await CarData.get(id);
  console.log(res.data);
  return res.data;
});

export const removeCar = createAsyncThunk('cars/delete', async ({ id }) => {
  await CarData.remove(id);
  return { id };
});

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState: [],

  addCar: (state, action) => {
    state.push(action.payload);
  },
  deleteCar: () => {},

  extraReducers: {
    [retrieveCars.fulfilled]: (state, action) => [action.payload],

    [retrieveCar.fulfilled]: (state, action) => action.payload,

    [removeCar.fulfilled]: (state, action) => {
      const index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addCar, deleteCar } = carDetailsSlice.actions;

export default carDetailsSlice.reducer;
