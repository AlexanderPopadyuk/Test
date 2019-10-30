import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import addPost from '../../actions/posts/addPost';
import getUserPosts from '../../actions/posts/getUserPosts';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

const AddPost = ({ userId, actions }) => {
  const [open, setOpen] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = values => {
    const { addPost, getUserPosts } = actions;
    const post = {
      userId,
      ...values,
    };

    setActionInProgress(true);

    addPost(post, () => {
      handleClose();
      setActionInProgress(false);
      getUserPosts(userId);
    });
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        <Icon>add_circle</Icon>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add post</DialogTitle>
        <Formik
          initialValues={{
            title: '',
            body: '',
          }}
          validationSchema={Yup.object({
            title: Yup.string("Enter title")
              .required("Title is required"),
            body: Yup.string("Enter body")
              .required("Body is required"),
          })}
          onSubmit={submit}
        >
          <Form>
            <DialogContent>
              <FormikTextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
              />
              <FormikTextField
                margin="dense"
                id="body"
                name="body"
                label="Body"
                fullWidth
                multiline
                rows="4"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {actionInProgress ? <CircularProgress /> : 'Add post'}
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </>
  )
};

AddPost.propTypes = {
  userId: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    addPost: PropTypes.func,
    getUserPosts: PropTypes.func,
  }),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addPost,
      getUserPosts,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddPost);
