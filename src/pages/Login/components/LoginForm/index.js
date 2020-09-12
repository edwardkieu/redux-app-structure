import React, { useState } from 'react';
import PropTypes from 'prop-types';

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  onLogin: null,
};

function LoginForm(props) {
  const { onLogin } = props;
  const [formLoading, setFormLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // if (!onLogin || formLoading) return;
    // setFormLoading(true);
    // var user = {
    //   email: 'kieuminhhien@gmail.com',
    //   password: 'Abcd1234',
    // };
    // onLogin(user);
    // setTimeout(() => {
    //   setFormLoading(false);
    // }, 5000);
  };
  return (
    <form className="user" onSubmit={handleLogin}>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-user"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter Email Address..."
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-user"
          id="exampleInputPassword"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox small">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck"
          />
          <label className="custom-control-label" htmlFor="customCheck">
            Remember Me
          </label>
        </div>
      </div>
      <a href="index.html" className="btn btn-primary btn-user btn-block">
        Login
      </a>
      <hr />
      <a href="index.html" className="btn btn-google btn-user btn-block">
        <i className="fab fa-google fa-fw" /> Login with Google
      </a>
      <a href="index.html" className="btn btn-facebook btn-user btn-block">
        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
      </a>
    </form>
  );
}

export default LoginForm;
