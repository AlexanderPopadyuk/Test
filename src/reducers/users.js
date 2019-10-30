import {
  GET_ALL_USERS, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR,
  GET_USER, GET_USER_SUCCESS, GET_USER_ERROR,
} from '../constants/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        selectedUser: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
