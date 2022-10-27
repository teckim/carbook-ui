import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import MyReservation from './components/MyReservation';

export const authRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/reservation',
    element: <MyReservation />,
  },
]);

export default authRouter;
