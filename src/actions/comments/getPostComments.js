import client from '../../utils/client';
import { GET_POST_ALL_COMMENTS, GET_POST_ALL_COMMENTS_SUCCESS, GET_POST_ALL_COMMENTS_ERROR } from '../../constants/actionTypes';

export default postId => {
  return dispatch => {
    dispatch({
      type: GET_POST_ALL_COMMENTS,
    });

    client({
      url: `/comments?postId=${postId}`,
    })
      .then(response => {
        dispatch({
          type: GET_POST_ALL_COMMENTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_POST_ALL_COMMENTS_ERROR,
          payload: error.message,
        })
      });
  };
};
