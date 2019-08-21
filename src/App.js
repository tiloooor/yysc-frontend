import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Profile from './components/profile/Profile';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';
import CreateTask from './components/admin/CreateTask';
import CreateResource from './components/resources/CreateResource';
import Resource from './components/resource/Resource';
import Resources from './components/resources/Resources';
import PrivateRoute from './components/routing/PrivateRoute';
import MessageDashboard from './components/messages/MessageDashboard';

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
            <Route path="/admin/register" exact component={Register} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/post/:id" component={Post} />
            <PrivateRoute exact path="/upload" component={CreateResource} />
            <PrivateRoute exact path="/resource/:id" component={Resource} />
            <PrivateRoute exact path="/resources" component={Resources} />
            <PrivateRoute exact path="/resource/task" component={CreateTask} />
            <PrivateRoute exact path="/message" component={MessageDashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
