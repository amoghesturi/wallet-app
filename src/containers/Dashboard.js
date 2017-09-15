import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

import { addMoneyToWallet } from '../actions/Dashboard';

const mapStateToProps = ({ dashboard }) => ({
  transactions: dashboard.transactions,
  isFetching: dashboard.isFetching,
});

const mapDispatchToProps = dispatch => ({
  addMoneyToWallet: dispatch(amount => addMoneyToWallet(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
