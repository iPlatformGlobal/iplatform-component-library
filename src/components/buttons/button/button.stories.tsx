import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import {
  Canvas,
  Content,
  Heading,
  Description,
} from '../../storybook';

import Button, { BUTTON_STYLE_VARIANTS } from './index';

const StyledButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  button {
    margin: 0 10px;
  }
  button:first-child {
    margin-left: 0;
  }
`;

export default {
  title: 'Buttons/Button',
  component: Button,
  excludeStories: [],
  decorators: [
    withKnobs
  ]
};

export const All = () => (
  <>
    <Default/>
    <Long/>
    <Legacy/>
    <Custom/>
  </>
)

export const Default = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Default button</Heading>

    <Description>
      The default button used for generic applications in the iPlatform UI.
    </Description>

    <Description>
      By default, the text is not capitalised.
    </Description>

    <Content>
      <StyledButtonGroup>
        <Button
          onClick={action('clicked')}
        >
          Default
        </Button>

        <Button
          onClick={action('clicked')}
          isPrimary={true}
        >
          Primary
        </Button>

        <Button
          onClick={action('clicked')}
          disabled={true}
        >
          Disabled
        </Button>
      </StyledButtonGroup>
    </Content>
  </Canvas>
);

export const Long = () => (
  <Canvas selectable={false}>
    <Heading>Long Button</Heading>

    <Content>
      <StyledButtonGroup>
        <Button
          onClick={action('clicked')}
          styleVariant={BUTTON_STYLE_VARIANTS.LONG}
        >
          Default
        </Button>

        <Button
          onClick={action('clicked')}
          isPrimary={true}
          styleVariant={BUTTON_STYLE_VARIANTS.LONG}
        >
          Primary
        </Button>

        <Button
          onClick={action('clicked')}
          isPrimary={true}
          styleVariant={BUTTON_STYLE_VARIANTS.LONG}
          disabled={true}
        >
          Disabled
        </Button>
      </StyledButtonGroup>
    </Content>
  </Canvas>
);

export const Legacy = () => (
  <Canvas selectable={false}>
    <Heading>Legacy Button</Heading>

    <Content>
      <StyledButtonGroup>
        <Button
          onClick={action('clicked')}
          styleVariant={BUTTON_STYLE_VARIANTS.LEGACY}
        >
          Default
        </Button>

        <Button
          onClick={action('clicked')}
          isPrimary={true}
          styleVariant={BUTTON_STYLE_VARIANTS.LEGACY}
        >
          Primary
        </Button>

        <Button
          onClick={action('clicked')}
          isPrimary={true}
          styleVariant={BUTTON_STYLE_VARIANTS.LEGACY}
          disabled={true}
        >
          Disabled
        </Button>
      </StyledButtonGroup>
    </Content>
  </Canvas>
)

export const Custom = () => (
  <Canvas selectable={false}>
    <Heading>Customizable Buttons</Heading>
    <Description>These buttons can be modified using the props at the bottom.</Description>

    <StyledButtonGroup>
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
        isPrimary={boolean('isPrimary', false)}
      >
        {text('Button Label', 'Custom Label')}
      </Button>
      <Button
        onClick={action('clicked')}
        styleVariant={BUTTON_STYLE_VARIANTS.LONG}
        disabled={boolean('Disabled', false)}
        isPrimary={boolean('isPrimary', false)}
      >
        {text('Button Label', 'Custom Label')}
      </Button>
      <Button
        onClick={action('clicked')}
        isPrimary={boolean('isPrimary', false)}
        styleVariant={BUTTON_STYLE_VARIANTS.LEGACY}
        disabled={boolean('Disabled', false)}
      >
        {text('Button Label', 'Custom Label')}
      </Button>
    </StyledButtonGroup>
  </Canvas>
)
