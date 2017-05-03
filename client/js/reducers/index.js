import {combineReducers} from 'redux';

import goals from './goals';
import user from './user';
import stickers from './stickers';
// import routerReducer from './router';

const rootReducer = combineReducers({
    goals, stickers, user
});


export default rootReducer;
