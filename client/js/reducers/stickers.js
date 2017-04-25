import * as actions from '../actions/actions';

const initialState = {
  stickers: [{
      sticker: '',
    //   earned: false,
    //   goalId: '',
      loading: true
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

            // case actions.EARN_STICKER: {
            //     console.log('Sticker earned!');
            //     return {
            //         ...state,
            //       stickers: action.stickers
            //   }
            // }

            case actions.FETCH_ERROR: {
                console.log('Fetch error!');
                return {
                    ...state,
                  stickers: action.error
              }
            }

            default:
                return state;
        }
    }

export default stickersReducer;
