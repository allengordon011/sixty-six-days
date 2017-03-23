import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import * as actions from './actions/actions';

// const defaultState = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, defaultState,  composeEnhancers(applyMiddleware(thunk)));

const store = createStore(rootReducer,   composeEnhancers(applyMiddleware(thunk)));
//defaultState,

store.dispatch(actions.fetchGoals()).then(() =>
  console.log(store.getState())
)

export default store;
