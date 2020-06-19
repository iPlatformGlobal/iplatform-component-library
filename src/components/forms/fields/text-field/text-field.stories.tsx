import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import TextField from './';

import {
  Canvas,
  Content,
  Heading,
  Description,
} from '../../../storybook';


const StyledTextFieldGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  .text-field-wrapper {
    margin: 0 10px;
  }
  .text-field-wrapper:first-child {
    margin-left: 0;
  }
`;

export default {
  title: 'Inputs/Text Field',
  component: TextField,
  excludeStories: [],
  decorators: [
    withKnobs
  ]
};

export const All = () => (
  <>
    <Default/>
    <FullWidth/>
    <Error/>
    <Custom/>
  </>
)

export const Default = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Default Text field</Heading>

    <Description>
      The default text field used for generic applications in the iPlatform UI.
    </Description>

    <Content>
      <StyledTextFieldGroup>
        <TextField
          label={'Default'}
          placeholder={'Default'}
          onChange={action('changed')}
        />

        <TextField
          label={'Default with helper text'}
          placeholder={'Default with helper text'}
          helperText={'I have helper text'}
          onChange={action('changed')}
        />

        <TextField
          label={'Disabled'}
          placeholder={'Disabled'}
          onChange={action('changed')}
          disabled={true}
        />
      </StyledTextFieldGroup>
    </Content>
  </Canvas>
);

export const FullWidth = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Full Width Text field</Heading>
    <Content>
      <StyledTextFieldGroup>
        <TextField
          label={'Full width'}
          placeholder={'Full width'}
          onChange={action('changed')}
          fullWidth={true}
        />
      </StyledTextFieldGroup>
    </Content>
</Canvas>
);

export const Error = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Error Text field</Heading>
    <Content>
      <StyledTextFieldGroup>
        <TextField
          label={'Error'}
          placeholder={'Error'}
          onChange={action('changed')}
          error={true}
        />

        <TextField
          label={'Error with helper text'}
          placeholder={'Error with helper text'}
          helperText={'I have an error'}
          error={true}
          onChange={action('changed')}
        />
      </StyledTextFieldGroup>
    </Content>
  </Canvas>
);

export const Custom = () => (
  <Canvas selectable={false}>
    <Heading>Customizable text fields</Heading>
    <Description>These text fields can be modified using the props at the bottom.</Description>

    <StyledTextFieldGroup>
      <TextField
        label={text('Text Field Label', 'Custom Label')}
        value={text('Text Field Value', 'Custom Value')}
        defaultValue={text('Text Field Default Value', 'Custom Default Value')}
        placeholder={text('Text Field Placeholder', 'Custom Placeholder')}
        helperText={text('Text Field Helper Text', 'Custom Helper Text')}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        onChange={action('changed')}
      />
    </StyledTextFieldGroup>
    <StyledTextFieldGroup>
      <TextField
        label={text('Text Field Label', 'Custom Label')}
        value={text('Text Field Value', 'Custom Value')}
        defaultValue={text('Text Field Default Value', 'Custom Default Value')}
        placeholder={text('Text Field Placeholder', 'Custom Placeholder')}
        helperText={text('Text Field Helper Text', 'Custom Helper Text')}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        fullWidth={true}
        onChange={action('changed')}
      />
    </StyledTextFieldGroup>
    <StyledTextFieldGroup>
      <TextField
        label={text('Text Field Label', 'Custom Label')}
        value={text('Text Field Value', 'Custom Value')}
        defaultValue={text('Text Field Default Value', 'Custom Default Value')}
        placeholder={text('Text Field Placeholder', 'Custom Placeholder')}
        helperText={text('Text Field Helper Text', 'Custom Helper Text')}
        disabled={boolean('Disabled', false)}
        error={true}
        onChange={action('changed')}
      />
    </StyledTextFieldGroup>
  </Canvas>
)
