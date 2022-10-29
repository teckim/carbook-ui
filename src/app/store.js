import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carDetailsReducer from '../features/car/carDetailsSlice';
import myReservationsReducer from '../features/myReservations/myReservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    details: carDetailsReducer,
    myreseravation: myReservationsReducer,
  },
});

export default store;
