import React from 'react';
import { action } from '@storybook/addon-actions';
import Autocomplete from './';
import { TextField as MuiTextField } from '@material-ui/core';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';

import TextField from '../text-field';
import {
  Canvas,
  Content,
  Heading,
  Description,
} from '../../../storybook';
import { Box } from '@material-ui/core';


export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  excludeStories: [],
};

export const Standard = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Autocomplete field</Heading>

    <Description>
      This component implements the Material UI Autocomplete component.
      It wraps a different input component using the renderInput prop and adds autocomplete functionality.
      It's documentation can be found <a href={'https://material-ui.com/components/autocomplete/'}>here</a>.
    </Description>

    <Content>
      <Box display={'flex'} flexDirection={'row'}>
        <Box className={'autocomplete-field-wrapper'} flexGrow={1} mr={3}>
          <Autocomplete
            options={[
              { label: 'Option 1', text: 'option 1' },
              { label: 'Option 2', text: 'option 2' },
              { label: 'Option 3', text: 'option 3' },
            ]}
            getOptionLabel={option => option.label}
            disabledItemsFocusable={true}
            onChange={action('changed')}
            renderInput={params => (
              <TextField
                {...params}
                label={'Default Field'}
              />
            )}
          />
        </Box>
        <Box className={'autocomplete-field-wrapper'} flexGrow={1} mr={3}>
          <Autocomplete
            options={[
              'Option 1',
              'Option 2',
              'Option 3',
            ]}
            disabledItemsFocusable={true}
            color={'primary'}
            onChange={action('changed')}
            renderInput={params => (
              <TextField
                {...params}
                color={'primary'}
                label={'Primary Field'}
              />
            )}
          />
        </Box>
        <Box className={'autocomplete-field-wrapper'} flexGrow={1} mr={3}>
          <Autocomplete
            options={[
              'Option 1',
              'Option 2',
              'Option 3',
            ]}
            disabledItemsFocusable={true}
            color={'secondary'}
            onChange={action('changed')}
            renderInput={params => (
              <TextField
                {...params}
                color={'secondary'}
                label={'Secondary Field'}
              />
            )}
          />
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <Box className={'autocomplete-field-wrapper'} mr={3}>
          <MuiAutocomplete
            options={[
              'Option 1',
              'Option 2',
              'Option 3',
            ]}
            disabledItemsFocusable={true}
            color={'primary'}
            onChange={action('changed')}
            renderInput={params => (
              <MuiTextField
                {...params}
                color={'primary'}
                label={'Primary Field'}
              />
            )}
          />
        </Box>
      </Box>
    </Content>
  </Canvas>
);
