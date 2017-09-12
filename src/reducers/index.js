import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './Login';

export default combineReducers({
  login,
  form: formReducer,
});
