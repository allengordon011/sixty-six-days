import {combineReducers} from 'redux';

// import goals from './goals';
import user from './user';
import stickers from './stickers';

const rootReducer = combineReducers({
    stickers, user
});


export default rootReducer;
