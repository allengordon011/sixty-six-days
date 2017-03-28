import * as actions from '../actions/actions';

const initialState = {
  goals: []
};

const goals = (state=initialState, action) => {

  if (action.type === actions.FETCH_GOALS_SUCCESS) {
      console.log('Fetch goals success')
    return {...state,
      goals: action.goals
    //   completed: action.completed,
    }
  }
  if (action.type === actions.FETCH_ERROR) {
    return {...state,
      goals: action.error,
    }
  }
  return state;
}

export default goals;
