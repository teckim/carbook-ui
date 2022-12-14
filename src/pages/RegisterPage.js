import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../features/auth/authSlice';
import RegisterForm from '../features/auth/components/RegisterFrom';

const RegisterPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
