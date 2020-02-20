import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'ramda';
import { Typography, IconButton } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import { variantIcon } from './constants';
import useStyles from './styles';
import { closeSnackbar } from '../../actions';
import { getSnackbar } from '../../selectors';

const MySnackbar = () => {
  const snackbar = useSelector(getSnackbar);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isSnackbarOpen = !isEmpty(snackbar);
  if (!isSnackbarOpen) return false;
  const variant = snackbar.variant;
  const message = '';
  const Icon = variantIcon[variant];
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open
      autoHideDuration={2000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <SnackbarContent
        className={classes[variant]}
        message={
          <Typography variant="body2" className={classes.message}>
            <Icon className={classes.iconVariant} />
            {message}
          </Typography>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={() => dispatch(closeSnackbar())}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default MySnackbar;
