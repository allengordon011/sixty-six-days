import * as actions from '../actions/actions';

const initialState = {
  users: [],
  isLoggedIn: false
};

const usersReducer = (state=initialState, action) => {

  if (action.type === actions.LOGIN_SUCCESS) {
      console.log('Login success')
    return {...state,
      isLoggedIn: true
    }
  }
  if (action.type === actions.LOGOUT_SUCCESS) {
      console.log('Logout success')
    return {...state,
      isLoggedIn: false
    }
  }
  if (action.type === actions.FETCH_ERROR) {
    return {...state,
      users: action.error
    }
  }

  return state;
}

export default usersReducer;
