import * as actions from '../actions/actions';

const initialState = {
  stickers: []
};

const stickers = (state=initialState, action) => {
        switch(action.type) {
            case actions.FETCH_STICKERS_REQUEST: {
              console.log('Fetch stickers request');
              // const i = action.index;
              return state
            //     ...state
                  }

            case actions.FETCH_STICKERS_SUCCESS: {
                console.log('Fetch stickers success');
                // const i = action.index;
                return {
                    ...state,
                  stickers: action.stickers
              }
                    }

            case actions.FETCH_ERROR: {
                console.log('Fetch error!');
                return {
                    ...state,
                  stickers: action.error
              }

                // break; //?
            }
            default:
                return state;
        }
    }

export default stickers;
