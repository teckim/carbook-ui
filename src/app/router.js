import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import AddCar from './components/carDetails/AddCar';
import CarDetails from './components/carDetails/CarDetails';

export const authRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export const mainRouter = createBrowserRouter([
  {
    path: '/cars/:id',
    element: <CarDetails />,
  },
  {
    path: '/add',
    element: <AddCar />,
  },
]);

export default authRouter;
