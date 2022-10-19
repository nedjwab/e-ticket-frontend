import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { fetchNewUser } from '../../features/users/registerSlice';

function SignUp() {
  const navigate = useNavigate();
  const [newuser, setNewuser] = useState({
    username: '',
    email: '',
    password_digest: '',
  });
  const dispach = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault(e);

    const user = {
      user: { ...newuser },
    };

    dispach(fetchNewUser(user));

    setNewuser({
      username: '',
      email: '',
      password_digest: '',
    });
  };

  const notify = () => {
    if (!newuser.username || !newuser.password_digest || !newuser.email) {
      toast('Fill the form please!');
    } else {
      toast('User Signed up succefuly!');
      navigate('/');
    }
  };

  return (
    <section className="form-container">
      <div>
        <div className="form-signin">
          <div className="form-header">
            <h1 className="green-text">Register</h1>
          </div>
          <form
            onSubmit={handleRegisterSubmit}
          >
            <div className="input-floor">
              <label htmlFor="username-input">
                <input
                  className="form-control"
                  type="text"
                  id="username-input"
                  value={newuser.username}
                  onChange={(e) => setNewuser({ ...newuser, username: e.target.value })}
                  placeholder="UserName"
                />
              </label>
            </div>
            <div className="input-floor">
              <label htmlFor="email-input">
                <input
                  id="email-input"
                  className="form-control"
                  type="email"
                  value={newuser.email}
                  onChange={(e) => setNewuser({ ...newuser, email: e.target.value })}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="password-input">
                <input
                  id="password-input"
                  className="form-control"
                  type="password"
                  value={newuser.password}
                  onChange={(e) => setNewuser({ ...newuser, password_digest: e.target.value })}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="button-container">

              <button type="submit" onClick={notify} className="submit-button">
                SignUp
              </button>
              <ToastContainer />
              <Link to="/" className="links">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
