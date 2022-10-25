import React from 'react';
import { useSelector } from 'react-redux';
import { selectErrors } from './authSlice';
import './auth.css';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  const errors = useSelector(selectErrors);

  return (
    <div className="auth-layout">
      <div className="container">
        {!!errors?.length && (
        <div className="errors">
          {errors.map((err) => typeof err === 'string' && err)}
        </div>
        )}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
