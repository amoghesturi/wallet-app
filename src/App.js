import React from 'react';
import { BrowserRouter as Router,
  Route,
  Redirect,
  Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { Login, Signup } from './containers/Login';
import Dashboard from './components/Dashboard';
import rootReducer from './reducers';

// Inialize stylles
import '../public/styles/app.scss';

// Initialize redux logger
const logger = createLogger();

// create Redux store
const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
