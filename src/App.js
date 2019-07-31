import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import store from './store';
import { Provider } from 'react-redux';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute
              exact
              path="/profile"
              component={Profile}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
