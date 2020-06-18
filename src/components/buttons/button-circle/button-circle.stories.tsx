import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { withKnobs } from "@storybook/addon-knobs";

import { Canvas, Content, Description, Heading, } from '../../storybook';

import { ButtonCircle } from './index';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';

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
  title: 'Buttons/Circle Button',
  component: ButtonCircle,
  excludeStories: [],
  decorators: [
    withKnobs
  ]
};

export const All = () => (
  <Fragment>
    <Default/>
    <Theming/>
    <CustomIcon/>
    <Configuration/>
  </Fragment>
)

export const Default = () => (
  <Canvas
    selectable={false}
  >
    <Heading>Default look</Heading>

    <Description>
      A floating action button used as a call to action.
    </Description>

    <Content>
      <StyledButtonGroup>
        <ButtonCircle/>
      </StyledButtonGroup>


      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'A button with a label'}
        />
      </StyledButtonGroup>


      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'A disabled button'}
          disabled={true}
        />
      </StyledButtonGroup>
    </Content>
  </Canvas>
);

export const Theming = () => (
  <Canvas selectable={false}>
    <Heading>Theming</Heading>
    <Description>Custom themes can be applied.</Description>

    <Content>
      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'Primary Button'}
        />
      </StyledButtonGroup>

      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'Primary Button (Disabled)'}
          disabled={true}
        />
      </StyledButtonGroup>

      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          color={'secondary'}
          labelText={'Secondary Button'}
        />
      </StyledButtonGroup>

      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          color={'secondary'}
          labelText={'Secondary Button (Disabled)'}
          disabled={true}
        />
      </StyledButtonGroup>
    </Content>
  </Canvas>
)

export const CustomIcon = () => (
  <Canvas selectable={false}>
    <Heading>Custom Icons</Heading>

    <Description>
      We can add any component as a child, although icons from the material UI library are recommended.
    </Description>

    <Content>
      <StyledButtonGroup>
        <ButtonCircle
          iconComponent={(<HomeIcon className="inner-icon"/>)}
        />
        <ButtonCircle
          iconComponent={(<AccountBalanceIcon className="inner-icon"/>)}
        />
        <ButtonCircle
          iconComponent={(<SendIcon className="inner-icon"/>)}
        />
      </StyledButtonGroup>
    </Content>
  </Canvas>
);

export const Configuration = () => (
  <Canvas selectable={true}>
    <Heading>Configuration</Heading>

    <Description>
      Other props are provided for convenient configuration.
    </Description>

    <Content>
      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'A button with 20px of padding'}
          spacing={20}
        />
      </StyledButtonGroup>

      <StyledButtonGroup>
        <ButtonCircle
          onClick={action('clicked')}
          labelText={'A button with an un-clickable label'}
          clickableText={false}
        />
      </StyledButtonGroup>
    </Content>
  </Canvas>
)
