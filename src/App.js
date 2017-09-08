import React from 'react';
import { BrowserRouter as Router,
  Route,
  Redirect,
  Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

// Inialize stylles
import '../public/styles/app.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);

export default App;
