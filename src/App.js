import React from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './app/router';
import { setJWT } from './features/auth/authSlice';
import http from './modules/http';

function App() {
  const disptch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    http.defaults.headers.common.Authorization = `Bearer ${jwt}`;
    disptch(setJWT(jwt));
  }

  return <RouterProvider router={router} />;
}

export default App;
