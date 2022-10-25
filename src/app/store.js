import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carDetailsReducer from '../features/car/carDetailsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    details: carDetailsReducer,
  },
});

export default store;
