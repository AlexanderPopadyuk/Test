import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deletePost from '../../actions/posts/deletePost';
import getUserPosts from '../../actions/posts/getUserPosts';
import ExtendedPropTypes from '../../constants/propTypes';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  card: {
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '16px !important',
  },
  detailsIcon: {
    justifySelf: 'flex-end',
    marginLeft: 'auto',
  },
  title: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '80%',
    overflow: 'hidden',
  }
});

const PostCard = ({ actions, post }) => {
  const [actionInProgress, setActionInProgress] = useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    const { deletePost, getUserPosts } = actions;

    setActionInProgress(true);

    deletePost(post.id, () => {
      getUserPosts(post.userId);
      setActionInProgress(false);
    })
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Button onClick={handleDelete}>
          {actionInProgress ? <CircularProgress /> : <Icon>delete</Icon>}
        </Button>
        <Typography component="span" className={classes.title}>{post.title}</Typography>
        <Link to={`/user/${post.userId}/${post.id}`} className={classes.detailsIcon}>
          <Icon>arrow_forward_ios</Icon>
        </Link>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  post: ExtendedPropTypes.post,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      deletePost,
      getUserPosts,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(PostCard);
