import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import Sidebar from '../features/SideBar/Sidebar';

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
    path: '/',
    element: <Sidebar />,
  },
]);

export default authRouter;
