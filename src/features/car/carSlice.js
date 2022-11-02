import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CarData from './carData';

export const createCar = createAsyncThunk(
  'car/create',
  async ({ brand, model, image, price, description }) => {
    const res = await CarData.create({
      brand,
      model,
      image,
      price,
      description,
    });
    return res.data;
  },
);

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

export const removeCar = createAsyncThunk('car/delete', async ({ id }) => {
  await CarData.remove(id);
  return { id };
});

const carSlice = createSlice({
  name: 'car',
  initialState: {
    all: [],
    car: null,
  },

  extraReducers: {
    [createCar.fulfilled]: (state, action) => {
      state.all.push(action.payload);
    },
    [retrieveCars.fulfilled]: (state, action) => {
      state.all = action.payload;
    },

    [retrieveCar.fulfilled]: (state, action) => {
      state.car = action.payload;
    },

    [removeCar.fulfilled]: (state, action) => {
      state.all = [...state.all.filter(({ id }) => id !== action.payload.id)];
    },
  },
});

export const { addCar, deleteCar } = carSlice.actions;

export default carSlice.reducer;
