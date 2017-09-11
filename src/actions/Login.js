export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVED_LOGIN = 'RECEIVED_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVED_SIGNUP = 'RECEIVED_SIGNUP';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';

// Action creators
const requestLogin = () => ({
  type: REQUEST_LOGIN,
});

const receivedLogin = userDetails => ({
  type: RECEIVED_LOGIN,
  email: userDetails.email,
});

const errorLogin = error => ({
  type: ERROR_LOGIN,
  error,
});

const requestSignup = () => ({
  type: REQUEST_SIGNUP,
});

const receivedSignup = isSuccessFul => ({
  type: RECEIVED_SIGNUP,
  isSuccessFul,
});

const errorSignup = error => ({
  type: ERROR_SIGNUP,
  error,
});

const sendLoginRequest = email => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ email });
  }, 1000);
});

const sendSignupRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 1000);
});


export const loginUser = (email, password) => (dispatch) => {
  dispatch(requestLogin(email, password));
  return sendLoginRequest(email, password)
    .then(userDetails => dispatch(receivedLogin(userDetails)))
    .catch(error => dispatch(errorLogin(error)));
};

export const signupUser = (email, mobile, password) => (dispatch) => {
  dispatch(requestSignup(email, mobile, password));
  return sendSignupRequest(email, mobile, password)
    .then(signupResult => dispatch(receivedSignup(signupResult)))
    .catch(error => dispatch(errorSignup(error)));
};
