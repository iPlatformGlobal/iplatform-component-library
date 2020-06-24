import React, { FC } from 'react';
import { Box, TextField as MuiTextField, TextFieldProps } from '@material-ui/core';


/** @Internal */
export const TextField: FC<TextFieldProps> = (props) => {
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
