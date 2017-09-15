import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './Login';
import dashboard from './Dashboard';

export default combineReducers({
  login,
  dashboard,
  form: formReducer,
});
