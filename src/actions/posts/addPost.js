import client from '../../utils/client';

export default (post, afterSuccess) => {
  return dispatch => {
    client({
      method: 'post',
      url: '/posts',
      data: post,
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
