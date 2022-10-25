import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAsync } from './authSlice';

const LoginFrom = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    const credencials = {
      username, password,
    };

    dispatch(loginAsync(credencials));
  };

  return (
    <div>
      <form className="form">
        <div>
          <label className="label" htmlFor="username">
            Username
            <input className="input" id="username" onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
            <input className="input" id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div>
          <button className="button" type="button" onClick={onSubmit}>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
