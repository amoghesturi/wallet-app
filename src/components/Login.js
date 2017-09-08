import React from 'react';
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

const TextInput = () => (
  <div className="login">
    <div className="login-wrapper">
      <TabBar items={tabBarItems} />
      <Input
        className="input-text"
        type="text"
        placeholder="Enter your Email/Mobile number"
      />
      <Input
        className="input-text"
        type="password"
        placeholder="Wallet password"
      />
      <button className="btn-large">Secure Login</button>
    </div>
  </div>
);

export default TextInput;
