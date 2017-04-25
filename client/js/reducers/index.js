import {combineReducers} from 'redux';

import goals from './goals';
import users from './users';
import stickers from './stickers';
// import routerReducer from './router';

const rootReducer = combineReducers({
    goals, stickers, users
});


export default rootReducer;
