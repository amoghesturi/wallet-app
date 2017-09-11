import React from 'react';
import { BrowserRouter as Router,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

// Inialize stylles
import '../public/styles/app.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
