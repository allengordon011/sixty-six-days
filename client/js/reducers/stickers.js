import * as actions from '../actions/actions';
import 'isomorphic-fetch'

const sticker = (state=[], action) => {
        switch(action.type) {
          case 'FETCH_STICKER_SUCCESS' :
            const i = action.index;
            return [
              ...state.slice(0,i), // before the one we are updating
              {...state[i], sticker: state[i].sticker + 1},
              ...state.slice(i + 1), // after the one we are updating
            ]
        default:
            return state;
        }
    }

export default sticker;
