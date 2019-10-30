import client from '../../utils/client';
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from '../../constants/actionTypes';

export default userId => {
  return dispatch => {
    dispatch({
      type: GET_USER,
    });

    client({
      url: `/users/${userId}`
    })
      .then(response => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USER_ERROR,
          payload: error.message,
        })
      });
  };
};
