import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ExtendedPropTypes from '../../constants/propTypes';
import getUsers from '../../actions/users/getUsers';
import MainLayout from '../ui/MainLayout';
import UserCard from '../ui/UserCard';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const Users = ({ actions, users = [], loading, error }) => {
  useEffect(() => {
    const { getUsers } = actions;

    getUsers();
  }, []);

  return (
    <MainLayout>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={4}>
        {users.map(user => (
          <Grid key={user.id} item lg={3} sm={6} xs={12}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
      {error && <Typography align="center" variant="h5" color="secondary">{error}</Typography>}
    </MainLayout>
  );
};

Users.propTypes = {
  actions: PropTypes.shape({
    getUsers: PropTypes.func,
  }),
  users: PropTypes.arrayOf(ExtendedPropTypes.user),
  loading: PropTypes.bool,
};

function mapStateToProps(state) {
  const { loading, users, error } = state.users;

  return {
    loading,
    users,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getUsers,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
