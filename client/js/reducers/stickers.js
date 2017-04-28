import * as actions from '../actions/actions';

const initialState = {
  stickers: [{
      sticker: '',
      loading: true,
      hidden: true
    }]
};

const stickersReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.FETCH_STICKERS_REQUEST: {
          console.log('Fetch stickers request');
          return state
        }

        case actions.FETCH_STICKERS_SUCCESS: {
            console.log('Fetch stickers success');
            return {
                ...state,
              stickers: action.stickers,
              loading: false
          }
        }
        case actions.SHOW_STICKERS:
            {
                console.log('Show stickers');
                return {
                    ...state,
                    hidden: false
                }
            }
        case actions.HIDE_STICKERS: {
            console.log('Hide stickers');

            return {
                ...state,
                hidden: true
            }
        }

        default:
            return state;
        }
    }

export default stickersReducer;
