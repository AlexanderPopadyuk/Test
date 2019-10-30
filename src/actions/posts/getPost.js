import client from '../../utils/client';
import { GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from '../../constants/actionTypes';

export default postId => {
  return dispatch => {
    dispatch({
      type: GET_POST,
    });

    client({
      url: `/posts/${postId}`,
    })
      .then(response => {
        dispatch({
          type: GET_POST_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_POST_ERROR,
          payload: error.message,
        })
      });
  };
};
