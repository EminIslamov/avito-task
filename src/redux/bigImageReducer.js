const initialState = {
  items: [],
  loading: false
}

const bigImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'pic/load/start':
      return {
        ...state,
        loading: true
      }

    case 'pic/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

export default bigImageReducer;