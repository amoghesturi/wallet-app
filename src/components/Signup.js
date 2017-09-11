import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

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

const Signup = props => (
  <div className="login">
    <div className="login-wrapper">
      <TabBar items={tabBarItems} />
      <Input
        className="input-text"
        type="text"
        placeholder="Enter your Email"
      />
      <Input
        className="input-text"
        type="password"
        placeholder="Mobile number"
      />
      <Input
        className="input-text"
        type="password"
        placeholder="Wallet password"
      />
      { props.isFetching && <Spinner name="line-scale-party" color="blue" /> }
      { !props.isFetching &&
        <button
          className="btn-large"
          onClick={() => props.signupUser('EMAIL', '1234567890', 'PASSWORD')}
        >
          Create your Wallet
        </button>
      }
    </div>
  </div>
);

Signup.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired,
};

export default Signup;
