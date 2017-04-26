import * as actions from '../actions/actions';

const initialState = {
  location: null
}

const routerReducer = (state=initialState, action) => {
  if (action.type === actions.LOCATION_CHANGE) {
    return { ...state, location: action.location }
  }

  return state;
}

export default routerReducer;
