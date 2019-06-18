import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { compose } from 'ramda';
import { withSnackbar } from 'notistack';
import { forEach, includes } from 'ramda';
import { getSnackbars } from '../../selectors';
import { useMyDispatch } from '../../hooks';

const Snackbars = () => {
  const [displayed, handleDsiplayed] = useState([]);
  const snackbars = useSelector(getSnackbars);
  const { removeSnackbar, enqueueSnackbar } = useMyDispatch();
  useEffect(() => {
    forEach(snackbar => {
      if (includes(snackbar.key)(displayed)) return;
      enqueueSnackbar(snackbar.message, snackbar.options);
      handleDsiplayed([...displayed, snackbar.key]);
      removeSnackbar(snackbar.key);
    })(snackbars);
  });
  return false;
};

export default compose(withSnackbar)(Snackbars);
