import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import AddMoney from './AddMoney';

const Dashboard = ({ addMoneyToWallet }) => (
  <div className="dashboard-container">
    <Navbar />
    <AddMoney addMoneyToWallet={addMoneyToWallet} />
  </div>
);

Dashboard.propTypes = ({
  addMoneyToWallet: PropTypes.func.isRequired,
});

export default Dashboard;
