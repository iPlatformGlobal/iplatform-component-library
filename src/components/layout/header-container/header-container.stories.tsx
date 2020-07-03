import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { Canvas, Description, Heading, } from '../../storybook';

import HeaderContainer from './index';

export default {
  title: 'Layout/HeaderContainer',
  component: HeaderContainer,
  excludeStories: [],
  decorators: [
    withKnobs
  ]
};

export const Default = () => (
  <Canvas>
    <Heading>Header Container</Heading>

    <Description>
      Headers are typically white navbar-style elements with some drop shadow.
    </Description>

    <Description>
      This is a shell component for creating your own custom headers.
    </Description>

    <Canvas styleVariant={'contrast'}>
      <HeaderContainer/>
    </Canvas>
  </Canvas>
);

