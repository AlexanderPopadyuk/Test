import {
  GET_USER_ALL_POSTS, GET_USER_ALL_POSTS_SUCCESS, GET_USER_ALL_POSTS_ERROR,
  GET_POST, GET_POST_SUCCESS, GET_POST_ERROR,
} from '../constants/actionTypes';

const initialState = {
  posts: [],
  selectedPost: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ALL_POSTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_ALL_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_ALL_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        selectedPost: action.payload,
        loading: false,
        error: null,
      };
    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
