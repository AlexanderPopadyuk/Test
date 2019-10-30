import client from '../../utils/client';

export default (comment, afterSuccess) => {
  return dispatch => {
    client({
      method: 'post',
      url: '/posts',
      data: comment,
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
