export const loadPhotos = () => {
  return dispatch => {
    dispatch({
      type: 'photos/load/start'
    });

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'photos/load/success',
          payload: json
        })
      })
  }
}

export const loadPic = (id) => {
  return dispatch => {
    dispatch({type: 'pic/load/start'})

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'pic/load/success',
          payload: json
        })
      })
  }
}

export const addComment = (text) => {
  return dispatch => {
    dispatch({
      type: 'comm/add/success',
      payload: text
    })
  }
}