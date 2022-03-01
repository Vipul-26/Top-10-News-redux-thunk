const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CHANNEL":
      return { ...state, channelName: action.payload };
    case "REQUEST_POSTS":
      return { ...state, loading: true };
    case "RECEIVE_POSTS":
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;

