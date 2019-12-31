import React from 'react';
import { Drawer as MDrawer } from '@material-ui/core';
import UserForm from '../../components/UserForm';
import { useFilter } from '../../hooks';
import useStyles from './styles';

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const classes = useStyles();
  const { handleFilter, filter } = useFilter();
  return (
    <MDrawer
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <div className={classes.root}>
        <UserForm initialValues={filter} submit={handleFilter} />
      </div>
    </MDrawer>
  );
};

export default Drawer;