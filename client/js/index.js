import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter,Route} from 'react-router-dom';
import { Switch } from 'react-router';


import store from './store';
import App from './components/App';
import Splash from './components/Splash';
import Signup from './components/Signup';
import Login from './components/Login';

// const history = syncHistoryWithStore(browserHistory, store)


// import { ConnectedRouter } from 'connected-react-router'
injectTapEventPlugin();


console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter history={history}>
                <div>
                    <Route exact path="/" component={Splash} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/app" component={App} />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
})
