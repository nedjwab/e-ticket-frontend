import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCurrentUser } from '../../features/users/registerSlice';

const Login = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password_digest: '',
  });

  const handleUserLogin = (e) => {
    e.preventDefault(e);

    const currentUser = {
      user: { ...user },
    };
    dispach(fetchCurrentUser(currentUser));

    if (user.username && user.password_digest) {
      setTimeout(() => {
        navigate('/home');
        window.location.reload(false);
      }, 1000);
    } else {
      alert('Username or Password cannot be empty !!');
      return;
    }
    setUser({
      username: '',
      password_digest: '',
    });
  };

  return (
    <section className="form-section">
      <div>
        <div className="form-signin">
          <div className="form-header">
            <h2>Login</h2>
          </div>

          <form onSubmit={handleUserLogin}>
            <div className="input-floor">
              <label htmlFor="name-input">
                <input
                  id="name-input"
                  className="form-control"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="UserName"
                />
              </label>
            </div>

            <div className="input-floor">
              <label htmlFor="password-input">
                <input
                  id="password-input"
                  className="form-control"
                  type="password"
                  value={user.password_digest}
                  onChange={(e) => setUser({ ...user, password_digest: e.target.value })}
                  placeholder="Password"
                />
              </label>
            </div>

            <div className="button-container">
              <button type="submit">
                Login
              </button>
              <Link to="/signup">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
