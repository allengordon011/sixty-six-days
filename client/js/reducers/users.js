import * as actions from '../actions/actions';

const initialState = {
  users: []
};

const users = (state=initialState, action) => {

  if (action.type === actions.LOGIN_SUCCESS) {
      console.log('Login success')
    return {...state,
      goals: action.goals
    }
  }
  if (action.type === actions.FETCH_ERROR) {
    return {...state,
      goals: action.error,
    }
  }
  return state;
}

export default users;
