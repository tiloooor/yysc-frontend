import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div id="sign-in-container">
      <div id="sign-in-header">
        <h3>Sign In</h3>
      </div>

      <div id="sign-in-desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
          <Link to="/">Forgot password?</Link>
        </p>
      </div>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email address </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            aria-describedby="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            aria-describedby="password"
          />
        </div>
        <button type="submit" className="btn btn-general">
          Sign In
        </button>
        <Link to="/register" className="link-general">
          Don't have an account? Create one!
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
