import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../shared/layouts/auth';
import MainLayout from '../shared/layouts/main';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import CarDetailsPage from '../pages/CarDetailsPage';
import MyReservationsPage from '../pages/MyReservationsPage';

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'me/reservations',
        element: <MyReservationsPage />,
      },
      {
        path: 'cars/:id',
        element: <CarDetailsPage />,
      },
    ],
  },
]);

export default router;
