import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from './authSlice';
import LoginFrom from './LoginFrom';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <LoginFrom />
    </div>
  );
};

export default LoginPage;
