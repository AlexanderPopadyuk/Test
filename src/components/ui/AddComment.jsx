import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import addComment from '../../actions/comments/addComment';
import getPostComments from '../../actions/comments/getPostComments';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';

const AddComment = ({ postId, actions }) => {
  const [open, setOpen] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = values => {
    const { addComment, getPostComments } = actions;
    const post = {
      postId,
      ...values,
    };

    setActionInProgress(true);

    addComment(post, () => {
      handleClose();
      setActionInProgress(false);
      getPostComments(postId);
    });
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>Add comment</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add comment</DialogTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            body: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string("Enter name")
              .required("Title is required"),
            email: Yup.string("Enter email")
              .email("Enter a valid email")
              .required("Email is required"),
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
                id="name"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
              />
              <FormikTextField
                margin="dense"
                id="email"
                name="email"
                label="Email"
                type="email"
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
                {actionInProgress ? <CircularProgress /> : 'Add comment'}
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </>
  )
};

AddComment.propTypes = {
  postId: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    addComment: PropTypes.func,
    getPostComments: PropTypes.func,
  }),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addComment,
      getPostComments,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddComment);
