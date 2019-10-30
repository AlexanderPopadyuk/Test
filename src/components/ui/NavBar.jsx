import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    marginBottom: 40,
  }
});

const NavBar = ({ backLink, title, children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item lg={1}>
        <Link to={backLink}>
          <Icon>arrow_back_ios</Icon>
        </Link>
      </Grid>
      <Grid item lg={10}>
        <Typography align="center" variant="h5">{title}</Typography>
      </Grid>
      <Grid item lg={1}>
        {children}
      </Grid>
    </Grid>
  );
};

export default NavBar;
