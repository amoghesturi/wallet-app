export const ADD_MONEY = 'ADD_MONEY';
export const ADDED_MONEY = 'ADDED_MONEY';
export const ERROR_ADD_MONEY = 'ERROR_ADD_MONEY';

const addMoney = amount => ({
  type: ADD_MONEY,
  amount,
});

const addedMoney = amount => ({
  type: ADDED_MONEY,
  amount,
});

const errorAddMoney = error => ({
  type: ADDED_MONEY,
  error,
});

export default {
  addMoney,
};

export const addMoneyToWallet = amount => (dispatch) => {
  dispatch(addMoney(amount))
    .then(() => dispatch(addedMoney(amount)))
    .catch(error => dispatch(errorAddMoney(error)));
};
