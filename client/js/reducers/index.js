import {combineReducers} from 'redux';

import goals from './goals';
import stickers from './stickers';
// import routerReducer from './router';

const rootReducer = combineReducers({
    goals, stickers
});


export default rootReducer;
