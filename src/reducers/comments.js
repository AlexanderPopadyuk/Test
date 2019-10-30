import {
  GET_POST_ALL_COMMENTS, GET_POST_ALL_COMMENTS_SUCCESS, GET_POST_ALL_COMMENTS_ERROR,
} from '../constants/actionTypes';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_ALL_COMMENTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POST_ALL_COMMENTS_SUCCESS:
      return {
        comments: action.payload,
        loading: false,
        error: null,
      };
    case GET_POST_ALL_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
