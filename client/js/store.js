import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


// import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/index';
import * as actions from './actions/actions';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,   composeEnhancers(applyMiddleware(thunk)));


// console.log(store.getState())


export default store;
