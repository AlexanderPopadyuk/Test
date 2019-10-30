import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainLayout from '../ui/MainLayout';
import getUser from '../../actions/users/getUser';
import getPost from '../../actions/posts/getPost';
import getPostComments from '../../actions/comments/getPostComments';
import NavBar from '../ui/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CommentCard from '../ui/CommentCard';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ExtendedPropTypes from '../../constants/propTypes';
import AddComment from '../ui/AddComment';

const Post = ({ actions, selectedUser, selectedPost, comments = [], loading, match }) => {
  const [commentsVisible, setCommentsVisibility] = useState(false);
  const userId = match.params.userId;
  const postId = match.params.postId;

  useEffect(() => {
    const { getPost, getUser, getPostComments } = actions;

    getPost(postId);
    getUser(userId);
    getPostComments(postId);
  }, []);

  const toggleComments = () => {
    setCommentsVisibility(!commentsVisible);
  };

  return (
    <MainLayout>
      {selectedUser && !loading && <NavBar backLink={`/user/${userId}`} title={selectedUser.name} />}
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      )}
      {!loading && selectedPost && (
        <>
          <Box>
            <Typography variant="h4" align="center" component="h1" gutterBottom>{selectedPost.title}</Typography>
            <Typography variant="body1" align="justify" component="p">{selectedPost.body}</Typography>
          </Box>
          <Box style={{ marginTop: 20 }}>
            <Grid container justify="space-between">
              <Button color="primary" onClick={toggleComments}>{!commentsVisible ? 'Show comments' : 'Hide comments'}</Button>
              {commentsVisible && <AddComment postId={postId} />}
            </Grid>
            {commentsVisible && (
              <Grid container spacing={2} style={{ marginTop: 10 }}>
                {comments.map(comment => (
                  <Grid key={comment.id} item xs={12}>
                    <CommentCard comment={comment} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </>
      )}
    </MainLayout>
  );
};

Post.propTypes = {
  loading: PropTypes.bool,
  selectedUser: ExtendedPropTypes.user,
  selectedPost: ExtendedPropTypes.post,
  comments: PropTypes.arrayOf(ExtendedPropTypes.comment),
};

function mapStateToProps(state) {
  const { selectedUser } = state.users;
  const { selectedPost, loading } = state.posts;
  const { comments } = state.comments;

  return {
    selectedUser,
    selectedPost,
    loading,
    comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getUser,
      getPost,
      getPostComments,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
