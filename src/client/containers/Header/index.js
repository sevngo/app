import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Account from '../Account';
import Notifications from '../Notifications';
import { usersPath } from '../../utils';
import useStyles from './styles';
import messages from './messages';
import { getAuthToken } from '../../store/auth/selectors';

const Header = (props) => {
  const classes = useStyles();
  const token = useSelector(getAuthToken);
  return (
    <Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={classes.icon}
            component={Link}
            to={usersPath}
            size="large"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <FormattedMessage {...messages.title} />
          </Typography>
          {token && (
            <Fragment>
              <Notifications />
              <Account />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
