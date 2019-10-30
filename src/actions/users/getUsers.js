import client from '../../utils/client';
import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from '../../constants/actionTypes';

export default () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_USERS,
    });

    client({
      url: '/users'
    })
      .then(response => {
        dispatch({
          type: GET_ALL_USERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_ALL_USERS_ERROR,
          payload: error.message,
        })
      });
  };
};
