import { configureStore } from '@reduxjs/toolkit';
import carDetailsReducer from '../features/car/carDetailsSlice';

const store = configureStore({
  reducer: {
    details: carDetailsReducer,
  },
});

export default store;
