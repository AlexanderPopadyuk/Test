import React from 'react';
import ExtendedPropTypes from '../../constants/propTypes';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    width: '100%',
    padding: 10,
  },
  header: {
    marginBottom: 10,
  }
});

const CommentCard = ({ comment }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Grid container justify="space-between" className={classes.header}>
        <Typography variant="subtitle2">{comment.name}</Typography>
        <Typography variant="subtitle2">
          <Link href={`mailto:${comment.email}`} target="_blank">{comment.email}</Link>
        </Typography>
      </Grid>
      <Box>
        <Typography variant="body2">{comment.body}</Typography>
      </Box>
    </Paper>
  );
};

CommentCard.propTypes = {
  comment: ExtendedPropTypes.comment,
};

export default CommentCard;
