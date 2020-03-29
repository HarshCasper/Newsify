import axios from 'axios';
import actionTypes from '../constants/actionTypes';

const getArticlesSuccess = articles => ({
  type: actionTypes.GET_ARTICLES_SUCCESS,
  articles
});
const getArticlesFailure = message => ({
  type: actionTypes.GET_ARTICLES_FAILURE,
  message
});

const startGetArticles = () => ({
  type: actionTypes.START_GET_ARTICLES
});

const getArticles = source => async (dispatch) => {
  dispatch(startGetArticles());
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&sources=${source}`);
    setTimeout(() => {
      dispatch(getArticlesSuccess(res.data.articles));
    }, 0);
  } catch (err) {
    dispatch(getArticlesFailure(`Failed to load articles from ${source}`));
  }
};

export {
  getArticlesSuccess,
  getArticlesFailure,
  getArticles
};
