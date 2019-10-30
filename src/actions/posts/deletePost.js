import client from '../../utils/client';

export default (postId, afterSuccess) => {
  return dispatch => {
    client({
      method: 'delete',
      url: `/posts/${postId}`,
    })
      .then(response => {
        if (afterSuccess) {
          afterSuccess();
        }
      })
      .catch(error => {

      });
  };
};
