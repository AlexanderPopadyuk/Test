import React from 'react';
import ExtendedPropTypes from '../../constants/propTypes';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: '100%',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    marginBottom: 16,
  }
});

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">{user.name}</Typography>
        <Box className={classes.links}>
          <Link href={`mailto:${user.email}`}>{user.email}</Link>
          <Link href={`tel:${user.phone}`}>{user.phone}</Link>
          <Link href={user.website} target="_blank">{user.website}</Link>
        </Box>
        <Typography component="p" variant="body2">{user.company.name}</Typography>
        <Typography component="p" variant="body2">{user.company.catchPhrase}</Typography>
        <Typography component="p" variant="subtitle2">{user.company.bs}</Typography>
      </CardContent>
      <CardActions>
        <RouterLink to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
          <Button color="primary">Details</Button>
        </RouterLink>
      </CardActions>
    </Card>
  );
};

UserCard.propTypes = {
  user: ExtendedPropTypes.user,
};

export default UserCard;
