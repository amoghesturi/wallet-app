import React from 'react';
import TabBar from './TabBar';

const tabBarItems = [
  {
    title: 'Log In',
    to: '/login',
  },
  {
    title: 'Sign Up',
    to: '/signup',
  },
];

const TextInput = () => (
  <div className="login-wrapper">
    <TabBar items={tabBarItems} />
    {/* <input
      className="input-text"
      type="text"
      placeholder="Enter your Email/Mobile number"
    />
    <input
      className="input-text"
      type="password"
      placeholder="Wallet password"
    />
    <button
      className="btn-large"
      value="Secure Login"
    /> */}
  </div>
);

export default TextInput;
