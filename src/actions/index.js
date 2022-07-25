export const selectChannel = (channelName) => ({
  type: "SELECT_CHANNEL",
  payload: channelName,
});

export const requestPosts = () => ({
  type: "REQUEST_POSTS",
});

export const receivedPosts = (data) => ({
  type: "RECEIVE_POSTS",
  payload: data.articles,
});

export const fetchPosts = (channelName) => {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch(`https://newsapi.org/v1/articles?source=${channelName}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(
        (response) => response.json(),
        (error) => console.log('An error occurred.', error),
      )
      .then((data) => {
        dispatch(receivedPosts(data));
      });
  };
};

