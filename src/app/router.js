import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import MyReservation from './components/MyReservation';
import Reserve from './components/Reserve';

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
  {
    path: '/reserve',
    element: <Reserve />,
  },
]);

export default authRouter;
