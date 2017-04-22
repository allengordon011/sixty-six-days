import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';
// , router: routerReducer

import goals from './goals';
import stickers from './stickers';

const rootReducer = combineReducers({
    goals, stickers
});


export default rootReducer;
