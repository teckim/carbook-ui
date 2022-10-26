import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carDetailsReducer from '../features/car/carDetailsSlice';
import myReservationsReducer from '../features/myReservations/myReservation';
import reservationsReducer from '../features/Reservations/Reservations';

const store = configureStore({
  reducer: {
    auth: authReducer,
    details: carDetailsReducer,
    myreseravation: myReservationsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
