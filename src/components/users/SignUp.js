import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

    if (!newuser.username || !newuser.password_digest || !newuser.email) {
      alert('Fill up the form!');
      return;
    }

    const user = {
      user: { ...newuser },
    };

    dispach(fetchNewUser(user));

    setNewuser({
      username: '',
      email: '',
      password_digest: '',
    });
    navigate('/');
  };

  return (
    <section className="form-section bg-lime-500 ">
      <div className="overlay">
        <div className="form-signin">
          <div className="form-intro p-1 my-2 text-white text-center ">
            <h1>REGISTER</h1>
          </div>
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col gap-5 items-center "
          >
            <div className="">
              <label htmlFor="username-input" className="w-100 my-2">
                <input
                  className="form-control py-2  px-4 "
                  type="text"
                  id="username-input"
                  value={newuser.username}
                  onChange={(e) => setNewuser({ ...newuser, username: e.target.value })}
                  placeholder="UserName"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="email-input" className="w-100 my-2">
                <input
                  id="email-input"
                  className="form-control py-2  px-4 "
                  type="email"
                  value={newuser.email}
                  onChange={(e) => setNewuser({ ...newuser, email: e.target.value })}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="password-input" className="w-100 my-2">
                <input
                  id="password-input"
                  className="form-control py-2  px-4"
                  type="password"
                  value={newuser.password}
                  onChange={(e) => setNewuser({ ...newuser, password_digest: e.target.value })}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="button-container w-50">

              <button type="submit" className="btn sign-up my-2">
                SignUp
              </button>
              <Link to="/" className="btn log-in">
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
