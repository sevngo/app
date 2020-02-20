import React, { useEffect, useState } from 'react';
import { find, path, isEmpty, length } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, IconButton, Paper } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BlockIcon from '@material-ui/icons/Block';
import UserForm from '../../components/UserForm';
import Carousel from '../../components/Carousel';
import emptyImage from '../../images/emptyImage.png';
import { getUserImage } from '../../api';
import useStyles from './styles';
import { loadUser, likeUser, blockUser } from '../../actions';
import { getUser, getUsersLiked, getUsersBlocked, getFriends } from '../../selectors';

const User = ({ id }) => {
  const user = useSelector(getUser);
  const usersLiked = useSelector(getUsersLiked);
  const usersBlocked = useSelector(getUsersBlocked);
  const friends = useSelector(getFriends);
  const dispatch = useDispatch();
  const [activeStep, handleStep] = useState(0);
  useEffect(() => {
    dispatch(loadUser(id));
  }, [dispatch, id]);
  const classes = useStyles();
  const isLiked = Boolean(find(userLiked => userLiked._id === user._id)(usersLiked));
  const isBlocked = Boolean(find(userBlocked => userBlocked._id === user._id)(usersBlocked));
  const isFriend = find(friend => friend._id === user._id)(friends);
  const { images = [] } = user;
  const image = !isEmpty(images)
    ? getUserImage(user._id, path([activeStep, '_id'])(images))
    : emptyImage;
  const maxSteps = length(images);
  if (isEmpty(user)) return false;
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item className={classes.mw30}>
          <Paper elevation={1}>
            <Carousel activeStep={activeStep} handleStep={handleStep} maxSteps={maxSteps}>
              <Box bgcolor="background.default">
                <IconButton
                  className={isLiked ? classes.red : ''}
                  onClick={() => dispatch(likeUser(user._id))}
                  disabled={isLiked}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  className={isBlocked ? classes.red : ''}
                  onClick={() => dispatch(blockUser(user._id))}
                  disabled={isBlocked}
                >
                  <BlockIcon />
                </IconButton>
                {isFriend && (
                  <IconButton color="primary" disabled>
                    <DoneAllIcon />
                  </IconButton>
                )}
              </Box>
              <img className={classes.img} src={image} alt="profile" />
            </Carousel>
          </Paper>
        </Grid>
        <Grid item className={classes.mw30}>
          <Paper elevation={1} className={classes.p3}>
            <UserForm initialValues={user} disabled />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
