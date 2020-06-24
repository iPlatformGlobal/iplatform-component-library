import React, { FC } from 'react';
import { AutocompleteProps } from '@material-ui/lab';
// import { TextField } from '@material-ui/core';
import TextField from '../text-field';
import { Autocomplete } from './styles';

/** @Internal */
export interface IProps {
}

/** @Internal */
export const Dropdown: FC<AutocompleteProps<any, true, false, false>> = (props) => {
  return (
    <div>
      <Autocomplete
        renderInput={params => (
          <TextField
            {...params}
          />
        )}
        {...props}
      />
    </div>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
