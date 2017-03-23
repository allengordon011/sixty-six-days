import 'isomorphic-fetch'

const url = `/api/home`

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
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

// export const FETCH_STICKER = 'FETCH_STICKERS_SUCCESS';
// export const fetchStickersSuccess = stickers => ({
//   type: FETCH_STICKERS_SUCCESS,
//   stickers
// })

export const FETCH_STICKER_SUCCESS = 'FETCH_STICKER_SUCCESS';
export const fetchStickerSuccess = sticker => ({
  type: FETCH_STICKER_SUCCESS,
  sticker,
  index
})


export const fetchGoals = () => dispatch => {
  return fetch(url)
  .then(dispatch(fetchRequest()))
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
  return fetch(url, {
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

//when click button it sends id to this action
export const deleteGoal = (id) => dispatch => {
  return fetch(url + "/" + id, {
    method: 'DELETE'
  })
  .then(() => dispatch(fetchGoals()))
}

export const updateGoal = (goal, id) => dispatch => {
  return fetch(url + "/" + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goal
    })
  })
  .then(json => dispatch(fetchGoalsSuccess(json))
    ).catch(err => console.error(err))
}

export const updateCompletedGoal = (id) => dispatch => {
  return fetch(url + "/completed/" + id, {
    method: 'PUT'
  })
  .then(() => dispatch(fetchGoals())
  // .then((response) => response.json())
  // .then((json) => dispatch(fetchGoalsSuccess(json))
    ).catch(err => console.error(err))
}

export const fetchSticker = () => dispatch => {
    fetch('http://api.giphy.com/v1/gifs/search?q=success&api_key=dc6zaTOxFJmzC', {
    method: 'get'
    }).then(response => response.json()
    ).then(json => {
        let y = json.data;
        let gifs = y.map(gif => gif.images.fixed_height.url);
        const randomize25 = Math.floor(Math.random()*25);
        let gif = gifs[randomize25]
        return gif})
        .then(dispatch(postSticker(gif)))
        .catch(err => console.error(err))
}

export const postSticker = (sticker) => dispatch => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sticker
    })
  })
  .then(response => response.json())
  .then(json => dispatch(fetchStickerSuccess(json)))
  .catch(err => console.error(err))
}


// export const fetchStickers = () => dispatch => {
//   return fetch(url + "/stickers/")
//   .then(dispatch(fetchRequest()))
//   .then(response => {
//     if (!response.ok) {
//       const error = new Error(response.statusText)
//       error.response = response
//       throw error;
//     }
//     return response;
//   })
//   .then(response => response.json())
//   .then(stickerData =>
//   dispatch(fetchStickerSuccess(stickerData))
//   )
//   .catch(error =>
//     dispatch(fetchError(error))
//   );
// };
