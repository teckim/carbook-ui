import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectErrors } from '../../../features/auth/authSlice';
import './styles.css';

const AuthLayout = () => {
  const errors = useSelector(selectErrors);

  return (
    <main className="auth-layout">
      <div>
        {!!errors?.length && (
        <div className="errors">
          {errors.map((err) => typeof err === 'string' && err)}
        </div>
        )}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
