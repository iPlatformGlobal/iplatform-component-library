import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Button, { BUTTON_STYLE_VARIANTS } from '../../src/components/buttons/button';

const StyledButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  & ${Button} {
    margin: 3px 5px;
  }
`;

export default {
  title: 'Buttons',
  component: Button,
  excludeStories: [
    // 'LongVariant'
  ]
};

export const Default = () => (
  <>
    <StyledButtonGroup>
      <Button
        onClick={action('clicked')}
      >
        Default Button
      </Button>
      <Button
        onClick={action('clicked')}
        isPrimary={true}
      >
        Primary Button
      </Button>
    </StyledButtonGroup>
  </>
);

export const LongVariant = () => (
  <StyledButtonGroup>
      <Button
        onClick={action('clicked')}
        styleVariant={BUTTON_STYLE_VARIANTS.long}
      >
        Default Long
      </Button>
      <Button
        onClick={action('clicked')}
        isPrimary={true}
        styleVariant={BUTTON_STYLE_VARIANTS.long}
      >
        Primary Long
      </Button>
    </StyledButtonGroup>
);

// export const Primary = () => (
//   <Button
//     onClick={action('clicked')}
//     isPrimary={true}
//   >
//     Primary Button Variant
//   </Button>
// );
//
// export const PrimaryLong = () => (
//   <Button
//     onClick={action('clicked')}
//     isPrimary={true}
//     styleVariant={BUTTON_STYLE_VARIANTS.long}
//   >
//     Long Primary Button Variant
//   </Button>
// );
