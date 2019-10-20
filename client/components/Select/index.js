import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  InputLabel,
  FormControl,
  Select as MSelect,
  FormHelperText,
  OutlinedInput,
} from '@material-ui/core';
import { getFieldError } from '../../utils';
import messages from './messages';

const Select = ({ field, form: { errors, touched }, label, children, className, ...rest }) => {
  const { isError, error } = getFieldError(field.name, errors, touched);
  return (
    <FormControl margin="dense" className={className} fullWidth error={isError} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MSelect input={<OutlinedInput labelWidth={65} />} {...field} {...rest}>
        {children}
      </MSelect>
      {isError && (
        <FormHelperText>
          <FormattedMessage {...messages[error]} />
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
