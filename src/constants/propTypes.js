import PropTypes from 'prop-types';

const user = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bs: PropTypes.string,
  })
});

const post = PropTypes.shape({
  body: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  userId: PropTypes.number,
});

const comment = PropTypes.shape({
  id: PropTypes.number,
  postId: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});

export default {
  user,
  post,
  comment,
}
