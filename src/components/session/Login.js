import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/user/RegistrationLoginSlice';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function saveToLocalStorage(store) {
    try {
      const serializedStore = JSON.stringify(store);
      window.localStorage.setItem('user', serializedStore);
    } catch (e) {
      const error = new Error('Error saving to local storage');
      throw error;
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(login(username));
      setLoading(true);
    }
  };

  if (user.logged_in) {
    saveToLocalStorage(user);
    return <Navigate replace to="/user/events" />;
  }

  return (
    <div
      className="container-reg"
    >
      <h2 className="register-title">Log in</h2>
      <form onSubmit={formSubmit} className="reg-form">
        <div className="form-inputs">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {loading ? (
          <button type="button" className="btn-reg">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className="btn-reg">
            Log in
          </button>
        )}
      </form>
      <p>
        Dont have an account?
        <NavLink to="/register">
          <span>Sign up</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
