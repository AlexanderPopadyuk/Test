import client from '../../utils/client';
import { GET_USER_ALL_POSTS, GET_USER_ALL_POSTS_SUCCESS, GET_USER_ALL_POSTS_ERROR } from '../../constants/actionTypes';

export default userId => {
  return dispatch => {
    dispatch({
      type: GET_USER_ALL_POSTS,
    });

    client({
      url: `/posts?userId=${userId}`,
    })
      .then(response => {
        dispatch({
          type: GET_USER_ALL_POSTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USER_ALL_POSTS_ERROR,
          payload: error.message,
        })
      });
  };
};
