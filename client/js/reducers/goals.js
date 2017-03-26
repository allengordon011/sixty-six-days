import * as actions from '../actions/actions';

const initialState = {
  goals: []
};

//a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

const goals = (state=initialState, action) => {
  // console.log(state);
  // if (action.type === actions.FETCH_GOALS_REQUEST) {
  //     console.log('Fetch request')
  //   return {...state,
  //   }
  // }
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
  // if (action.type === actions.FETCH_STICKERS_SUCCESS) {
  //   return {...state,
  //     stickers: action.stickers,
  //   }
  // }
  return state;
}

export default goals;
