import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';
import useStyles from './styles';
import { getLoading } from '../../store/loading/selectors';

const Loader = () => {
  const classes = useStyles();
  const isLoading = useSelector(getLoading);
  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
