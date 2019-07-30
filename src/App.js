import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// Redux
import store from './store';
import { Provider } from 'react-redux';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
             <BrowserRouter>
                <div>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
