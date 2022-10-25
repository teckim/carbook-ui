import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carDetailsReducer from '../features/car/carDetailsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    details: carDetailsReducer,
  },
});

export default store;
