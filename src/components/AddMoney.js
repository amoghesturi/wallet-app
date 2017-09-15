import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Input from './Input';

const validate = (values) => {
  const errors = {};
  if (!values.amount || values.amount < 0) {
    errors.amount = 'Amount to add is required and should be more than 0';
  }
  return errors;
};

const AddMoney = ({ addMoneyToWallet }) => (
  <div className="add-money">
    <div className="add-money--wrapper">
      <div className="add-money--balance">
        <h3>Rs 0.00</h3>
        <p>Your wallet balance</p>
      </div>
      <div className="add-money--form">
        <form onSubmit={() => values => addMoneyToWallet(values)} className="add-money--form">
          <Field
            className="input-text"
            component={Input}
            type="number"
            name="amount"
            placeholder="Enter the amount to add in wallet"
          />
          <button
            className="btn-large"
            type="submit"
          >
            Add money to wallet
          </button>
        </form>
      </div>
    </div>
  </div>
);

AddMoney.propTypes = {
  addMoneyToWallet: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addMoneyForm',
  validate,
})(AddMoney);
