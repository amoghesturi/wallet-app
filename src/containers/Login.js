import { connect } from 'react-redux';

import LoginComponent from '../components/Login';
import SignupComponent from '../components/Signup';
import { loginUser, signupUser } from '../actions/Login';

const mapStateToProps = ({ login }) => ({
  isFetching: login.isFetching,
  loggedIn: login.loggedIn,
  email: login.email,
  mobile: login.mobile,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  signupUser: (email, mobile, password) =>
    dispatch(signupUser(email, mobile, password)),
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
