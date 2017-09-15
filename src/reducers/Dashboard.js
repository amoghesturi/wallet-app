import {
  ADD_MONEY,
  ADDED_MONEY,
  ERROR_ADD_MONEY,
} from '../actions/Dashboard';

const addMoney = state => Object.assign({}, state, { isFetching: true });

const addedMoney = (state, amount, time) => Object.assign({}, state, {
  isFetching: false,
  type: ADDED_MONEY,
  amount,
  time,
});

const errorAddingMoney = (state, error) => Object.assign({}, state, {
  isFetching: false,
  error,
});

const Dashboard = (state = {
  isFetching: false,
  transactions: [],
}, { type, amount, error }) => {
  const time = Date.now();
  switch (type) {
    case (ADD_MONEY):
      return addMoney(state);
    case (ADDED_MONEY):
      return addedMoney(state, amount, time);
    case (ERROR_ADD_MONEY):
      return errorAddingMoney(state, error);
    default:
      return state;
  }
};

export default Dashboard;
