import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { Canvas, Description, Heading, } from '../../storybook';

import Header from './index';
import Button from '../../buttons/button';

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

export const Default = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Canvas>
      <Heading>Header</Heading>

      <Description>
        Headers are typically white navbar-style elements with some drop shadow.
      </Description>

      <Canvas styleVariant={'contrast'}>
        <Header
          primaryText={'Quote'}
          secondaryText={'Secondary Text'}
        />
      </Canvas>

      <Canvas styleVariant={'contrast'}>
        <Header
          primaryText={'Quote'}
          secondaryText={'Secondary Text'}
          secondaryTextSuffix={'Another message'}
        />
      </Canvas>

      <Canvas styleVariant={'contrast'}>
        <Header
          primaryText={'Quote'}
          enableSearchBar={true}
        >
          <Button>Test</Button>
          <Button>Test 2</Button>
          <Button>Test 3</Button>
        </Header>
      </Canvas>

      <Canvas styleVariant={'contrast'}>
        <Header
          primaryText={'Quote'}
          secondaryText={'Secondary Text'}
          secondaryTextSuffix={'Another message'}
          enableSearchBar={true}
        >
          <Button>Test</Button>
          <Button>Test 2</Button>
          <Button>Test 3</Button>
        </Header>
      </Canvas>

      <Canvas styleVariant={'contrast'}>
        <Header
          primaryText={'ACC-12345678'}
          primaryTextSuffix={'John Smith'}
          statusBoxText={'Published'}
          typeBoxText={'Account'}
          enableLastEdited={true}
          lastEditedContentText={'test@iplatform.com | a day ago'}
        >
          <Button>Test</Button>
          <Button>Test 2</Button>
          <Button>Test 3</Button>
        </Header>
      </Canvas>
    </Canvas>
  )
}

