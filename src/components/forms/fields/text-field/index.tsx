import React, { FC } from 'react';
import { Box, TextField as MuiTextField } from '@material-ui/core';

/** @Internal */
export interface IProps {
  /** The label content. */
  label?: string;

  /** The value of the input element, required for a controlled component. */
  value?: string;

  /** The default value of the input element. */
  defaultValue?: string;

  /** The helper text content. */
  helperText?: string;

  /** The short hint displayed in the input before the user enters a value. */
  placeholder?: string;

  /** If true, the input element will be focused during the first mount. */
  autoFocus?: boolean;

  /** If true, the input will take up the full width of its container. */
  fullWidth?: boolean;

  /** If true, the label will be displayed in an error state. */
  error?: boolean;

  /** If true, the input element will be disabled. */
  disabled?: boolean;

  /** If true, the label is displayed as required and the input element` will be required. */
  required?: boolean;

  /**
   Callback fired when the value is changed.

   Signature:
   function(event: object) => void
   event: The event source of the callback. You can pull out the new value by accessing event.target.value (string).
  */
  onChange?: (...args) => void;

  /** The label content. */
  onBlur?: (...args) => void;
}

export const TextField: FC<IProps> = (props) => {
  const {
    fullWidth,
  } = props;

  return (
    <Box className={'text-field-wrapper'} width={fullWidth ? '100%' : 'auto'}>
      <MuiTextField
        {...props}
      />
    </Box>
  );
};

TextField.defaultProps = {};

export default TextField;
