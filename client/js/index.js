import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './history';

//import react router deps
import {HashRouter,Route} from 'react-router-dom';
import { Switch } from 'react-router';

import store from './store';
import App from './components/App';
import Splash from './components/Splash';
import Signup from './components/Signup';
import Login from './components/Login';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Splash} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/app" component={App} />
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
