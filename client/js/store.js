import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// import { routerMiddleware, push } from 'react-router-redux'
// const middleware = routerMiddleware(history)

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/index';
import * as actions from './actions/actions';

// const defaultState = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, defaultState,  composeEnhancers(applyMiddleware(thunk)));

const store = createStore(connectRouter(history)(rootReducer),   composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));
//defaultState,

// store.dispatch(actions.fetchGoals())
// store.dispatch(actions.fetchSticker())

// console.log(store.getState())


export default store;
