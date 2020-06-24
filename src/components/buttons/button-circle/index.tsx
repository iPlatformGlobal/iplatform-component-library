import React, { FC } from 'react';

import { Add as AddIcon } from '@material-ui/icons';

import { ButtonContainer, ButtonText, FabButtonComponent, } from './styles';


/** @Internal */
export interface IProps {
  onClick?: (...args) => void;

  labelText?: string;

  /** Should the button label text be clickable, and use a pointer cursor? Defaults to true */
  clickableText?: boolean;

  disabled?: boolean;

  /** Padding between button and label text, in px */
  spacing?: number;

  iconComponent?: any;

  color?: 'primary' | 'secondary';
}

export const ButtonCircle: FC<IProps> = (props) => {
  const {
    clickableText,
    disabled,
    labelText,
    onClick,
    spacing,
    iconComponent,
    color,
  } = props;

  return (
    <ButtonContainer
      onClick={clickableText ? onClick : undefined}
      clickableText={clickableText}
    >
      <FabButtonComponent
        aria-label="Add"
        color={color}
        data-qa="content-add-button"
        disabled={disabled}
        size={'small'}
        onClick={onClick}
        rootsection={'rootsection'} // To be removed
        variant={'round'}
      >
        {iconComponent ? iconComponent : <AddIcon className="inner-icon"/>}
      </FabButtonComponent>
      <ButtonText
        spacing={spacing ? spacing : 0}
        isClickable={clickableText as boolean}
      >
        {labelText}
      </ButtonText>
    </ButtonContainer>
  );
}

ButtonCircle.defaultProps = {
  // backgroundColorOverride: null,
  // labelText: null,
  clickableText: true,
  disabled: false,
  onClick: () => {},
  spacing: 0,
  color: 'primary',
};

export default ButtonCircle;
