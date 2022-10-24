import React from 'react';
import { NavLink } from 'react-router-dom';

const SplashScreen = () => (
  <>
    <section className="splash-sec">
      <div className="overlay" />
      <div className="top">
        <div className="welcome-text">
          <h1 className="white-text">Welcome Back</h1>
        </div>
        <NavLink to="/login" className="login-btn btn-login">
          <span>Login</span>
        </NavLink>
      </div>
      <div className="bottom">
        <p className="register-link">
          Don&apos;t have an account?
          {' '}
          <NavLink to="/signUp">Register</NavLink>
        </p>
      </div>

    </section>
  </>
);

export default SplashScreen;
