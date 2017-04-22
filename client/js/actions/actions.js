import 'isomorphic-fetch';
// import history from '../history';
// import {browserHistory} from 'react-router';
import { push } from 'connected-react-router'

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

export const FETCH_ERROR = 'FETCH_GOALS_ERROR';
export const fetchError = error => ({
  type: FETCH_ERROR,
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

export const EARN_STICKER = 'EARN_STICKER';
export const earnSticker = stickers => ({
  type: EARN_STICKER,
  stickers
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = html => ({
    type: LOGIN_SUCESS,
    html
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
      dispatch(fetchError(error))
  );
};

export const postGoal = (goal) => dispatch => {
  return fetch(goalUrl, {
    method: 'POST',
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

export const updateCompletedGoal = (id) => dispatch => {
  return fetch(goalUrl + "/completed/" + id, {
      method: 'PUT'
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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => response.json())
  .then(json => console.log('SIGNUP USER RES: ', json)
    //   dispatch(fetchGoalsSuccess(json))
  )
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
  .then(response => response.json())
    //   console.log('LOGIN RES: ', response.json()))

  .then(json => {
      console.log(json)
      if(json.user){
          console.log('go to app page!')
      }
  })
  // .then(dispatch(loginUserSuccess()))
  .then(dispatch(push('/app')))
  .catch(err => console.log('LOGIN ERROR: ', err))
}

export const logoutUser = () => {
    fetch('/api/logout', {
        method: 'get'
    }).then(
    console.log('fired off logoutUser event'))
    .then(
    //     response => response.json())
    // .then(json => {
    //     if(json.ok){
            dispatch(push('/')))
        }
//     })
// }
