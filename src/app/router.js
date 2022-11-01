import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MyReservation from './components/MyReservation';
import AuthLayout from '../shared/layouts/auth';
import MainLayout from '../shared/layouts/main';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import CarDetailsPage from '../pages/CarDetailsPage';
import MyReservationsPage from '../pages/MyReservationsPage';
import CarReservationPage from '../pages/CarReservationPage';

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
      {
        path: 'cars/:id/reserve',
        element: <CarReservationPage />,
      },
    ],
  },
  {
    path: '/reservation',
    element: <MyReservation />,
  },
]);

export default router;
