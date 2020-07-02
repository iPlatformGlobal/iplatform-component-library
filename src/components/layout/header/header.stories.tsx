import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { Canvas, Description, Heading, } from '../../storybook';

import Header from './index';

export default {
  title: 'Layout/Header',
  component: Header,
  excludeStories: [],
  decorators: [
    withKnobs
  ]
};

export const All = () => (
  <>
    <Default/>
    {/*<Long/>*/}
    {/*<Legacy/>*/}
    {/*<Custom/>*/}
  </>
)

export const Default = () => (
  <Canvas>
    <Heading>Header</Heading>

    <Description>
      Headers are typically white navbar-style elements with some drop shadow.
    </Description>

    <Canvas styleVariant={'contrast'}>
      <Header/>
    </Canvas>
  </Canvas>
);

