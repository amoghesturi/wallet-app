import React from 'react';

import profileIcon from '../../public/images/icons/account-circle.png';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar--left">
      <a href="/"><p>Logo</p></a>
    </div>
    <div className="navbar--right">
      <div className="navbar--right-balance">
        <h3>Wallet Balance</h3>
        <p>Rs. 0.00</p>
      </div>
      <div className="navbar--right-profile">
        <img src={profileIcon} alt="profile" />
        <h3>mobile number</h3>
      </div>
    </div>
  </div>
);

export default Navbar;
