import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';

import goals from './goals';
import stickers from './stickers';

const rootReducer = combineReducers({goals, stickers});
//, routing:routerReducer

export default rootReducer;
