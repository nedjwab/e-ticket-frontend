import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    }
    setUser({
      username: '',
      password_digest: '',
    });
  };

  const notify = () => {
    if (!user.username && !user.password_digest) {
      toast('Fill the form please!');
    } else {
      toast('User Signed up succefuly!');
    }
  };

  return (
    <section className="form-container">
      <div>
        <div className="form-signin">
          <div className="form-header">
            <h2 className="green-text">Login</h2>
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
                  placeholder="Username"
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
              <button type="submit" onClick={notify} className="submit-button">
                Login
              </button>
              <ToastContainer />
              <Link to="/signup" className="links">
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
