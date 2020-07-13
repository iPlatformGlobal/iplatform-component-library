import React, { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { Canvas, Description, Heading, } from '../../storybook';

import SearchInput from './index';

export default {
  title: 'Search/SearchInput',
  component: SearchInput,
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
  const [searchText, setSearchText] = useState<string>('');
  return (
    <Canvas>
      <Heading>Search Input</Heading>

      <Description>
        A rounded search input box that changes colour on focus.
      </Description>

      <Canvas styleVariant={'contrast'}>
        <SearchInput
          value={searchText}
          onChange={(event) => setSearchText(event?.target?.value)}
        />
      </Canvas>
    </Canvas>
  )
}

