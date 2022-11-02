import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerAsync, selectErrors } from '../authSlice';

const LoginFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const errors = useSelector(selectErrors);

  const onSubmit = () => {
    const user = {
      username,
      password,
      password_confirmation: passwordConfirmation,
    };

    dispatch(registerAsync(user)).unwrap()
      .then(() => navigate('/login'));
  };

  return (
    <div>
      <form className="form">
        <div>
          <label className="label" htmlFor="username">
            Username
            <input className="input" id="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <div className="input-error">{errors?.username?.length ? errors.username[0] : errors.username }</div>
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
            <input className="input" id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div className="input-error">{errors?.password?.length ? errors.password[0] : errors.password }</div>
        </div>
        <div>
          <label className="label" htmlFor="password_confirmation">
            Password confirmation
            <input className="input" id="password_confirmation" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </label>
          <div className="input-error">{errors?.password_confirmation?.length ? errors.password_confirmation[0] : errors.password_confirmation }</div>
        </div>
        <div>
          <button className="button" type="button" onClick={onSubmit}>Register</button>
        </div>
      </form>
      <small className="auth-footer">
        <span>Already have an account? </span>
        <Link className="text-indigo-600" to="/login">Login</Link>
      </small>
    </div>
  );
};

export default LoginFrom;
