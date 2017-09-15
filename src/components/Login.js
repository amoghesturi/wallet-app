import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { Field, reduxForm } from 'redux-form';

import TabBar from './TabBar';
import Input from './Input';

const tabBarItems = [
  {
    id: 1,
    title: 'Log In',
    to: '/login',
  },
  {
    id: 2,
    title: 'Sign Up',
    to: '/signup',
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password || values.password.length < 8) {
    errors.password = 'Password should be at least 8 characters';
  }
  return errors;
};

const Login = (props) => {
  const { isFetching, loginUser, handleSubmit } = props;
  return (
    <div className="login">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit(({
          email,
          password,
        }) => loginUser(email, password))}
        >
          <TabBar items={tabBarItems} />
          <Field
            className="input-text"
            component={Input}
            type="text"
            name="email"
            placeholder="Enter your Email/Mobile number"
          />
          <Field
            className="input-text"
            component={Input}
            type="password"
            name="password"
            placeholder="Wallet password"
          />
          { isFetching && <Spinner name="line-scale-party" color="blue" /> }
          { !isFetching &&
            <input
              type="submit"
              className="btn-large"
              value="Secure Login"
            />
          }
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(Login);
