import {
  REQUEST_LOGIN,
  RECEIVED_LOGIN,
  ERROR_LOGIN,
  REQUEST_SIGNUP,
  RECEIVED_SIGNUP,
  ERROR_SIGNUP,
} from '../actions/Login';

const requestLogin = state => Object.assign({}, state, {
  isFetching: true,
  loggedIn: false,
});

const receivedLogin = (state, email) => Object.assign({}, state, {
  isFetching: false,
  loggedIn: true,
  email,
});

const errorLogin = (state, error) => Object.assign({}, state, {
  isFetching: false,
  loggedIn: false,
  error,
});

const requestSignup = state => Object.assign({}, state, {
  isFetching: true,
});

const receivedSignup = (state, isSuccessFul) => Object.assign({}, state, {
  isFetching: false,
  isSuccessFul,
});

const errorSignup = (state, error) => Object.assign({}, state, {
  isFetching: false,
  error,
});

const userDetails = (state = {
  isFetching: false,
  loggedIn: false,
  email: '',
  mobile: '',
}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return requestLogin(state);
    case RECEIVED_LOGIN:
      return receivedLogin(state, action.userDetails);
    case ERROR_LOGIN:
      return errorLogin(state, action.error);
    case REQUEST_SIGNUP:
      return requestSignup(state);
    case RECEIVED_SIGNUP:
      return receivedSignup(state, action.isSuccessFul);
    case ERROR_SIGNUP:
      return errorSignup(state, action.error);
    default:
      return state;
  }
};

export default userDetails;
