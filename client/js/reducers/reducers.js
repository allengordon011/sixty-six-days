import * as actions from '../actions/actions';

const initialState = {
  goals: [],
  // users: [],
  loading: false,
  error: null
};

export const GoalsReducer = (state=initialState, action) => {
  // console.log(state);
  if (action.type === actions.FETCH_GOALS_REQUEST) {
    return {...state,
      loading: true
    }
  }
  if (action.type === actions.FETCH_GOALS_SUCCESS) {
    return {...state,
      goals: action.goals,
      loading: false,
      error: null
    }
  }
  if (action.type === actions.FETCH_GOALS_ERROR) {
    return {...state,
      loading: false,
      goal: action.error,
      error: null
    }
  }
  return state;
}