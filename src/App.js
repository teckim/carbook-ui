import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './app/router';
import http from './modules/http';

function App() {
  const jwt = localStorage.getItem('jwt');

  if (jwt) http.defaults.headers.common.Authorization = `Bearer ${jwt}`;

  return <RouterProvider router={router} />;
}

export default App;
