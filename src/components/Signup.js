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

const validate = ({ email, mobile, password }) => {
  const errors = {};
  if (!email) errors.email = 'Email is required';
  if (!mobile) errors.mobile = 'Mobile number id required';
  if (!password || password.length < 8) errors.password = 'Atleast 8 characters required';
  return errors;
};

const Signup = ({ signupUser, handleSubmit, isFetching }) => (
  <div className="login">
    <div className="login-wrapper">
      <form onSubmit={handleSubmit(({
        email,
        mobile,
        password,
      }) => signupUser(email, mobile, password))}
      >
        <TabBar items={tabBarItems} />
        <Field
          className="input-text"
          component={Input}
          type="text"
          name="email"
          placeholder="Enter your Email"
        />
        <Field
          className="input-text"
          component={Input}
          type="password"
          name="mobile"
          placeholder="Mobile number"
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
          <button className="btn-large">Create your Wallet</button>
        }
      </form>
    </div>
  </div>
);

Signup.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signupForm',
  validate,
})(Signup);
