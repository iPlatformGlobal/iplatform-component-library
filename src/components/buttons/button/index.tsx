import React, { FC, MouseEvent, ReactNode } from 'react';

import {
  StyledButtonWrapper,
  StyledButtonContentWrapper,
} from './styles';

/** @Internal */
export enum BUTTON_STYLE_VARIANTS {
  DEFAULT = 'default',
  LONG = 'long',
  LEGACY = 'legacy',
}

interface IProps {
  onClick?: (event: MouseEvent) => void;

  /** Any html, but usually the button text. */
  children?: ReactNode;

  /** Toggle disabled styles.*/
  disabled?: boolean;

  /** Enum for different style variants. */
  styleVariant?: 'default' | 'long' | 'legacy';

  isPrimary?: boolean;
  hasOutline?: boolean;

  theme?: any;
}


export const Button: FC<IProps> = (props) => {
  const {
    onClick,
    children,
    disabled,
    hasOutline,
    isPrimary,
    styleVariant,
  } = props;

  console.log('--- internal debug: button props: ', props);
  console.log('--- internal debug: button theme: ', props?.theme);

  return (
    <StyledButtonWrapper
      disabled={disabled}
      hasOutline={hasOutline}
      isActive={isPrimary}
      onClick={onClick}
      styleVariant={styleVariant}
    >
      <StyledButtonContentWrapper>
        {children}
      </StyledButtonContentWrapper>
    </StyledButtonWrapper>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  isPrimary: false,
  hasOutline: false,
  styleVariant: BUTTON_STYLE_VARIANTS.DEFAULT,
};

export default Button;
