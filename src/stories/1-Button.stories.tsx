import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button, { BUTTON_STYLE_VARIANTS } from '../../src/components/buttons/button';

export default {
  title: 'Button',
  component: Button,
};

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

export const IPlatformButtonDefault = () => (
  <Button 
    onClick={action('clicked')}
  >
    Default Button Variant
  </Button>
);

export const IPlatformButtonPrimary = () => (
  <Button 
    onClick={action('clicked')}
    isPrimary={true}
  >
    Primary Button Variant
  </Button>
);

export const IPlatformButtonPrimaryLong = () => (
  <Button 
    onClick={action('clicked')}
    isPrimary={true}
    styleVariant={BUTTON_STYLE_VARIANTS.long}
  >
    Long Primary Button Variant
  </Button>
);