import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../features/auth/authSlice';
import LoginFrom from '../features/auth/components/LoginFrom';

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
