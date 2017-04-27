import 'isomorphic-fetch';
import history from '../history';
// import {browserHistory} from 'react-router';
// import { push } from 'connected-react-router'
// import { push } from 'react-router-redux'

const goalUrl = '/api/goal';
const userUrl = '/api/user';

export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const fetchGoalsRequest = () => ({
  type: FETCH_GOALS_REQUEST
})

export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const fetchGoalsSuccess = goals => ({
  type: FETCH_GOALS_SUCCESS,
  goals
})

export const FETCH_GOALS_ERROR = 'FETCH_GOALS_ERROR';
export const fetchGoalsError = error => ({
  type: FETCH_GOALS_ERROR,
  error
})

export const FETCH_STICKERS_REQUEST = 'FETCH_STICKERS_REQUEST';
export const fetchStickersRequest = () => ({
  type: FETCH_STICKERS_REQUEST
  // stickers
})

export const FETCH_STICKERS_SUCCESS = 'FETCH_STICKERS_SUCCESS';
export const fetchStickersSuccess = stickers => ({
  type: FETCH_STICKERS_SUCCESS,
  stickers
})

// export const EARN_STICKER = 'EARN_STICKER';
export const earnSticker = (sticker, id) => dispatch => {
  dispatch(updateCompletedGoal(sticker, id))
  console.log('Sticker earned!');
}

export const removeSticker = (sticker, id) => dispatch => {
  dispatch(updateCompletedGoal(sticker, id))
  console.log('Sticker removed!');
}

export const SHOW_STICKERS = 'SHOW_STICKERS';
export const showStickers = () => ({
  type: SHOW_STICKERS
})

export const HIDE_STICKERS = 'HIDE_STICKERS';
export const hideStickers = () => ({
  type: HIDE_STICKERS
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = () => ({
    type: LOGIN_FAIL
})

export const RESET_FAIL = 'RESET_FAIL';
export const resetFail = () => ({
    type: RESET_FAIL
})

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error
})

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS

})

export const fetchGoals = () => dispatch => {
  return fetch(goalUrl, {
      credentials: 'same-origin'
  })
  // .then(dispatch(fetchRequest()))
  .then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(json =>
      dispatch(fetchGoalsSuccess(json))
  )
  .catch(error =>
      dispatch(fetchGoalsError(error))
  );
};

export const postGoal = (goal) => dispatch => {
  return fetch(goalUrl, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goal
    })
  })
  .then(response => response.json())
  .then(json => dispatch(fetchGoalsSuccess(json)))
}

export const deleteGoal = (id) => dispatch => {
  return fetch(goalUrl + "/" + id, {
    method: 'DELETE'
  })
  .then(() => dispatch(fetchGoals()))
}

export const updateGoal = (goal, id) => dispatch => {
  return fetch(goalUrl + "/" + id, {
    method: 'PUT',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        goal
        })
      })
    //   .then(json => dispatch(fetchGoalsSuccess(json))
    // )
    .catch(err => console.error(err))
}

export const updateCompletedGoal = (sticker, id) => dispatch => {
    console.log('STICKER COMPL: ', sticker.sticker)
    return fetch(goalUrl + "/completed/" + id, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          sticker: sticker.sticker
      })
    })
    .then(() => dispatch(fetchGoals())
      // .then((response) => response.json())
      // .then((json) => dispatch(fetchGoalsSuccess(json))
    )
    .catch(err => console.error(err))
}

export const fetchStickers = () => dispatch => {
    // return (dispatch) => dispatch(fetchStickersRequest)

    fetch('https://api.giphy.com/v1/gifs/search?q=success&api_key=dc6zaTOxFJmzC', {
    method: 'get'
    })
    .then(response => response.json())
    .then(json => {
        let y = json.data;
        let gifs = y.map(gif => {return ({sticker: gif.images.fixed_height.url, earned: false})});
        dispatch(fetchStickersSuccess(gifs))
    })
    .catch(err => console.error(err))
}

export const signupUser = (username, password) => dispatch => {
  return fetch('/api/signup', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => response.json())
  .then(json => {
            dispatch(loginSuccess())
        })
        .catch(err => {
            dispatch(loginFail());
            dispatch(loginError());
            console.error('SIGNUP ERROR: ', err);
        })
}

export const loginUser = (username, password) => dispatch => {
  return fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => {
      console.log('LOGIN RES: ', response)
      return response.json()
  })
  .then(json => {
          console.log('go to app page!', json)
          dispatch(loginSuccess())
  })
  .catch(err => {
      dispatch(loginFail());
      console.error('LOGIN ERROR: ', err);
  })
}

export const logoutUser = () => dispatch => {
    fetch('/api/logout', {
        method: 'get',
        credentials: 'same-origin'
    }).then(
    console.log('fired off logoutUser event'))
    .then(dispatch(logoutSuccess()))
    .catch(err => console.error('LOGOUT ERROR: ', err))

}

export const LOCATION_CHANGE = "LOCATION_CHANGE";
export const handleLocationChange = location => ({
      type: LOCATION_CHANGE,
      location
  })
