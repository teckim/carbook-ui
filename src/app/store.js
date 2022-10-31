import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carDetailsReducer from '../features/car/carSlice';
import myReservationsReducer from '../features/myReservations/myReservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carDetailsReducer,
    myreseravation: myReservationsReducer,
  },
});

export default store;
