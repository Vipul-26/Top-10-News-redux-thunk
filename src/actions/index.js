import axios from 'axios';

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

export function fetchPosts(channelName) {
  return function (dispatch) {
    dispatch(requestPosts())
    axios.get(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        console.log(response.data);
        dispatch(receivedPosts(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// export function fetchPosts(channelName) {
//   return function (dispatch) {
//     dispatch(requestPosts());
//     return fetch(`https://newsapi.org/v1/articles?source=${channelName}&apiKey=${process.env.REACT_APP_API_KEY}`)
//       .then(
//       (response) => response.json(),
//       (error) => console.log('An error occurred.', error),
//     )
//       .then((data) => {
//         dispatch(receivedPosts(data));
//       },
//     );
//   };
// }

// export const fetchPosts = async(channelName) => {
//   return function (dispatch) {
//     dispatch(requestPosts())
//     const apiUrl = `https://newsapi.org/v1/articles?source=${channelName}&apiKey=${API_KEY}`;
//     const result= await fetch(apiUrl);
//     const newsData = await result.json();
//     dispatch(receivedPosts(newsData));
//     }
//   }

