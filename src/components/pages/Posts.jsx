import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ExtendedPropTypes from '../../constants/propTypes';
import getUser from '../../actions/users/getUser';
import getUserPosts from '../../actions/posts/getUserPosts';
import MainLayout from '../ui/MainLayout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import PostCard from '../ui/PostCard';
import NavBar from '../ui/NavBar';
import AddPost from '../ui/AddPost';

const Posts = ({ actions, selectedUser, posts = [], loading, match }) => {
  const userId = parseInt(match.params.userId);

  useEffect(() => {
    const { getUserPosts, getUser } = actions;

    getUser(userId);
    getUserPosts(userId);
  }, []);

  return (
    <MainLayout>
      {selectedUser && !loading && (
        <NavBar backLink="/" title={selectedUser.name}>
          <AddPost userId={userId} />
        </NavBar>
      )}
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid key={post.id} item xs={12}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

Posts.propTypes = {
  actions: PropTypes.shape({
    getUser: PropTypes.func,
    getUserPosts: PropTypes.func,
  }),
  loading: PropTypes.bool,
  selectedUser: ExtendedPropTypes.user,
  posts: PropTypes.arrayOf(ExtendedPropTypes.post),
};

function mapStateToProps(state) {
  const { selectedUser } = state.users;
  const { loading, posts } = state.posts;

  return {
    loading,
    posts,
    selectedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getUser,
      getUserPosts,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
