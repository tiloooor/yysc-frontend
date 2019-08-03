import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';

const Register = ({ register, isAuthenticated, location: { pathname } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    admin: pathname === '/admin/register' ? true : false,
    adminCode: ''
  });

  const { email, password, passwordConfirm, admin, adminCode } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      console.log('Passwords do not match!');
    } else {
      register({
        email,
        password,
        admin,
        adminCode
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="sign-in-container">
      <div id="sign-in-header">
        <h3>Register</h3>
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
            minLength="6"
            aria-describedby="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            type="password"
            className="form-control"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => onChange(e)}
            minLength="6"
            aria-describedby="passwordConfirmation"
          />
        </div>
        {admin ? (
          <div className="form-group">
            <label htmlFor="adminCode">Administrator Code</label>
            <input
              type="text"
              className="form-control"
              name="adminCode"
              value={adminCode}
              onChange={(e) => onChange(e)}
              aria-describedby="adminCode"
            />
          </div>
        ) : (
          <div />
        )}

        <button type="submit" className="btn btn-general">
          Sign Up
        </button>
        <Link to="/login" className="link-general">
          Have an account? Sign in!
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
  { register }
)(Register);
